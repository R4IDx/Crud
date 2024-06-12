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

const createTable = async () => {
  try {
    const client = await pool.connect();
    await client.query(`
      DROP TABLE IF EXISTS speisen;
      CREATE TABLE speisen (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        zutat1 VARCHAR(100) NOT NULL,
        zutat2 VARCHAR(100),
        zutat3 VARCHAR(100)
      );
    `);
    client.release();
    console.log('Table created successfully');
  } catch (error) {
    console.error('Error creating table:', error);
  }
};

createTable().then(() => pool.end());

