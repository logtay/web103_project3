import { pool } from './database.js';
import './dotenv.js';
import { locationData, eventData } from '../data/information.js';

const createLocationsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS locations CASCADE;
    CREATE TABLE locations (
      id INT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      city VARCHAR(100) NOT NULL,
      state VARCHAR(50) NOT NULL,
      zip VARCHAR(20) NOT NULL,
      image VARCHAR(255) NOT NULL
    )
  `;
  try {
    await pool.query(createTableQuery);
    console.log('🎉 locations table created successfully');
  } catch (err) {
    console.error('⚠️ error creating locations table', err);
  }
};

const seedLocationsTable = async () => {
  await createLocationsTable();

  for (const location of locationData) {
    const insertQuery = {
      text: 'INSERT INTO locations (id, name, address, city, state, zip, image) VALUES ($1,$2,$3,$4,$5,$6,$7)',
      values: [
        location.id,      
        location.name,
        location.address,
        location.city,
        location.state,
        location.zip,
        location.image
      ]
    };
    try {
      await pool.query(insertQuery);
      console.log(`✅ ${location.name} added successfully`);
    } catch (err) {
      console.error('⚠️ error inserting location', err);
    }
  }
};

const createEventsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS events CASCADE;
    CREATE TABLE events (
      id INT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      time TIME,
      image VARCHAR(255),
      location_id INT REFERENCES locations(id)
    )
  `;
  try {
    await pool.query(createTableQuery);
    console.log('🎉 events table created successfully');
  } catch (err) {
    console.error('⚠️ error creating events table', err);
  }
};

const seedEventsTable = async () => {
  await createEventsTable();

  for (const event of eventData) {
    const insertQuery = {
      text: 'INSERT INTO events (id, title, date, time, image, location_id) VALUES ($1,$2,$3,$4,$5,$6)',
      values: [
        event.id,            
        event.title,
        event.date,
        event.time,
        event.image,
        event.location_id
      ]
    };
    try {
      await pool.query(insertQuery);
      console.log(`✅ ${event.title} added successfully`);
    } catch (err) {
      console.error('⚠️ error inserting event', err);
    }
  }
};

const seedAll = async () => {
  await seedLocationsTable();
  await seedEventsTable();
};

seedAll();
