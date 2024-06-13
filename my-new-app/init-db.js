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
      DROP TABLE IF EXISTS speisen;
      CREATE TABLE speisen (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        zutat1 VARCHAR(100) NOT NULL,
        zutat2 VARCHAR(100),
        zutat3 VARCHAR(100)
      );
    `);

    const insertQuery = `
      INSERT INTO speisen (name, zutat1, zutat2, zutat3) VALUES
      ('Spaghetti Bolognese', 'Spaghetti', 'Rinderhackfleisch', 'Tomatensauce'),
      ('Caesar Salad', 'Römersalat', 'Hähnchenbrust', 'Caesar-Dressing'),
      ('Margherita Pizza', 'Pizzateig', 'Tomatensauce', 'Mozzarella'),
      ('Hühnchen Curry', 'Hühnchen', 'Kokosmilch', 'Currypaste'),
      ('Lasagne', 'Lasagneplatten', 'Rinderhackfleisch', 'Béchamelsauce'),
      ('Quiche Lorraine', 'Mürbeteig', 'Speck', 'Eier'),
      ('Chili con Carne', 'Rinderhackfleisch', 'Bohnen', 'Tomaten'),
      ('Griechischer Salat', 'Tomaten', 'Gurken', 'Feta'),
      ('Risotto', 'Risottoreis', 'Weißwein', 'Parmesan'),
      ('Tacos', 'Tortillas', 'Rinderhackfleisch', 'Salsa');
    `;

    await client.query(insertQuery);

    client.release();
    console.log('Table created and data inserted successfully');
  } catch (error) {
    console.error('Error creating table and inserting data:', error);
  }
};

createTableAndInsertData().then(() => pool.end());
