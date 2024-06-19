const { Pool } = require('pg');


const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});

const getDishesFromDB = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM food');
    client.release();
    return result.rows;
  } catch (error) {
    console.error('Fehler beim Abrufen der food:', error);
    return [];
  }
};

const addDishToDB = async (name, carbs, protein, fat) => {
  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO food (name, carbs, protein, fat) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, carbs, protein, fat]
    );
    client.release();
    return result.rows[0];
  } catch (error) {
    console.error('Fehler beim Hinzufügen der Speise:', error);
    return null;
  }
};


const updateDishInDB = async (id, name, carbs, protein, fat) => {
  try {
    const client = await pool.connect();
    const result = await client.query(
      'UPDATE food SET name = $1, carbs = $2, protein = $3, fat = $4 WHERE id = $5 RETURNING *',
      [name, carbs, protein, fat, id]
    );
    client.release();
    return result.rows[0];
  } catch (error) {
    console.error('Fehler beim Aktualisieren der Speise:', error);
    return null;
  }
};

const deleteDishFromDB = async (id) => {
  try {
    const client = await pool.connect();
    const result = await client.query(
      'DELETE FROM food WHERE id = $1 RETURNING *',
      [id]
    );
    client.release();
    return result.rows[0];
  } catch (error) {
    console.error('Fehler beim Löschen der Speise:', error);
    return null;
  }
};

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const dishes = await getDishesFromDB();
      res.status(200).json(dishes);
    } else if (req.method === 'POST') {
      const { name, carbs, protein, fat } = req.body;
      const newDish = await addDishToDB(name, carbs, protein, fat);
      res.status(201).json(newDish); // 201 Created
    } else if (req.method === 'PUT') {
      const { id, name, carbs, protein, fat } = req.body;
      const updatedDish = await updateDishInDB(id, name, carbs, protein, fat);
      if (updatedDish) {
        res.status(200).json(updatedDish);
      } else {
        res.status(404).json({ error: 'Speise nicht gefunden' });
      }
    } else if (req.method === 'DELETE') {
      const id = req.query.id;
      const deletedDish = await deleteDishFromDB(id);
      if (deletedDish) {
        res.status(200).json(deletedDish);
      } else {
        res.status(404).json({ error: 'Speise nicht gefunden' });
      }
    } else {
      res.status(405).json({ error: 'Methode nicht erlaubt' });
    }
  } catch (error) {
    console.error('Fehler in der API-Route:', error);
    res.status(500).json({ error: 'Ein Fehler ist aufgetreten' });
  }
}