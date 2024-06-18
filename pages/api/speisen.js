const { Pool } = require('pg');


const pool = new Pool({
  user: process.env.NEXT_PUBLIC_POSTGRES_USER,
  host: process.env.NEXT_PUBLIC_POSTGRES_HOST,
  database: process.env.NEXT_PUBLIC_POSTGRES_DATABASE,
  password: process.env.NEXT_PUBLIC_POSTGRES_PASSWORD,
  port: 5432,
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
  if (req.method === 'GET') {
    pool.query('SELECT * FROM food', (error, results) => {
      if (error) {
        return res.status(500).json({ error });
      }
      res.status(200).json(results.rows);
    });

  }
  else if (req.method === 'POST') {
    const { name, carbs, protein, fat } = req.body;
    pool.query('INSERT INTO food (name, carbs, protein, fat) VALUES ($1, $2, $3, $4)', [name, carbs, protein, fat], (error, results) => {
      if (error) {
        console.error('Fehler beim Hinzufügen der Speise:', error);
        res.status(500).json({ error: 'Fehler beim Hinzufügen der Speise' });
      } else {
        console.log('Speise hinzugefügt');
      }
    });
  }








  else if (req.method === 'PUT') {
    const { id, name, carbs, protein, fat } = req.body;
    pool.query('UPDATE food SET name = $1, carbs = $2, protein = $3, fat = $4 WHERE id = $5', [name, carbs, protein, fat, id], (error, results) => {
      if (error) {
        console.error('Fehler beim Aktualisieren der Speise:', error);
        res.status(500).json({ error: 'Fehler beim Aktualisieren der Speise' });
      } else {
        res.status(200).json({ message: 'Speise aktualisiert' });
      }
    });
  } else if (req.method === 'DELETE') {
  const id = req.query.id;
  console.log('id:', id);
  pool.query('DELETE FROM food WHERE id = $1', [id], (error, results) => {
    if (error) {
      console.error('Fehler beim Löschen der Speise:', error);
      res.status(500).json({ error: 'Fehler beim Löschen der Speise' });
    } else {
      res.status(200).json({ message: 'Speise gelöscht' });
    }
  });
}}