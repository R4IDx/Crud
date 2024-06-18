const { Pool } = require('pg');

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

const createTableAndInsertData = async () => {
  try {
    const client = await pool.connect();
    await client.query(`
      DROP TABLE IF EXISTS food;
      CREATE TABLE food (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        carbs NUMERIC NOT NULL,
        protein NUMERIC,
        fat NUMERIC
      );
    `);

    const insertQuery = `
      INSERT INTO food (name, carbs, protein, fat) VALUES
      ('Coca Cola', 10.0, 0.0, 0.0),
      ('Hamburger', 27.0, 13.0, 8.9),
      ('Magerquark', 4.1, 13.0, 0.2)
      
    `;

    await client.query(insertQuery);

    client.release();
    console.log('Table created and data inserted successfully');
  } catch (error) {
    console.error('Error creating table and inserting data:', error);
  }
};

createTableAndInsertData().then(() => pool.end());
