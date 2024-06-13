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

export default async function handler(req, res) {
  if (req.method === 'GET') {
    pool.query('SELECT * FROM speisen', (error, results) => {
      if (error) {
        return res.status(500).json({ error });
      }
      res.status(200).json(results.rows);
    });
  } else {
    // Handle other request methods
  }
}