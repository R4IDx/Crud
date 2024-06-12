import { Pool } from 'pg';
const API_TOKEN = process.env.API_TOKEN;



// Pool-Konfiguration mit deinen Verbindungsdaten
const pool = new Pool({
  user: 'default',
  host: 'ep-super-hall-a2oa0u4i-pooler.eu-central-1.aws.neon.tech',
  database: 'verceldb',
  password: 'TtmbaXeq50Rj',
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
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token !== API_TOKEN) {
        return res.status(401).json({ message: 'Ungültiger API-Schlüssel' });
    }


  if (req.method === 'GET') {
    const dishes = await getDishesFromDB();
    res.status(200).json(dishes);
  } else if (req.method === 'POST') {
    const { name, zutat1, zutat2, zutat3 } = req.body;
    const newDish = await addDishToDB(name, zutat1, zutat2, zutat3);
    if (newDish) {
      res.status(201).json({ message: 'Speise hinzugefügt', dish: newDish });
    } else {
      res.status(500).json({ message: 'Fehler beim Hinzufügen der Speise' });
    }
  } else {
    res.status(405).json({ message: 'Methode nicht erlaubt' });
  }
}
}