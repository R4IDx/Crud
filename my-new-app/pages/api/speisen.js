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
    const result = await client.query('SELECT * FROM speisen');
    client.release();
    return result.rows;
  } catch (error) {
    console.error('Fehler beim Abrufen der Speisen:', error);
    return [];
  }
};

const addDishToDB = async (name, zutat1, zutat2, zutat3) => {
  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO speisen (name, zutat1, zutat2, zutat3) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, zutat1, zutat2, zutat3]
    );
    client.release();
    return result.rows[0];
  } catch (error) {
    console.error('Fehler beim Hinzufügen der Speise:', error);
    return null;
  }
};


const updateDishInDB = async (id, name, zutat1, zutat2, zutat3) => {
  try {
    const client = await pool.connect();
    const result = await client.query(
      'UPDATE speisen SET name = $1, zutat1 = $2, zutat2 = $3, zutat3 = $4 WHERE id = $5 RETURNING *',
      [name, zutat1, zutat2, zutat3, id]
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
      'DELETE FROM speisen WHERE id = $1 RETURNING *',
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
    pool.query('SELECT * FROM speisen', (error, results) => {
      if (error) {
        return res.status(500).json({ error });
      }
      res.status(200).json(results.rows);
    });

  


  }
  else if (req.method === 'POST') {
    const { name, zutat1, zutat2, zutat3 } = req.body;
    pool.query('INSERT INTO speisen (name, zutat1, zutat2, zutat3) VALUES ($1, $2, $3, $4)', [name, zutat1, zutat2, zutat3], (error, results) => {
      if (error) {
        console.error('Fehler beim Hinzufügen der Speise:', error);
        res.status(500).json({ error: 'Fehler beim Hinzufügen der Speise' });
      } else {
        res.status(201).json({ message: 'Speise hinzugefügt' });
      }
    });
  }

   else if (req.method === 'PUT') {
    const dish = await updateDishInDB(req.body.id, req.body.name, req.body.zutat1, req.body.zutat2, req.body.zutat3);
    if (dish) {
      res.status(200).json(dish);
    } else {
      res.status(500).json({ error: 'Fehler beim Aktualisieren der Speise' });
    }

    
  } else if (req.method === 'DELETE') {
    const id = req.body.id;
    pool.query('DELETE FROM speisen WHERE id = $1', [id], (error, results) => {
      if (error) {
        console.error('Fehler beim Löschen der Speise:', error);
        res.status(500).json({ error: 'Fehler beim Löschen der Speise' });
      } else {
        if (results.rowCount > 0) {
          res.status(200).json({ message: 'Speise gelöscht' });
        } else {
          res.status(404).json({ error: 'Speise nicht gefunden' });
        }
      }
    });
      if (error) {
        console.error('Fehler beim Löschen der Speise:', error);
        res.status(500).json({ error: 'Fehler beim Löschen der Speise' });
    } else {
      if (results.rowCount > 0) {
        res.status(200).json({ message: 'Speise gelöscht' });
    } else {
      res.status(404).json({ error: 'Speise nicht gefunden' });
    }
  } 
}}
