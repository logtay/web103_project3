import { pool }  from './database.js'
import './dotenv.js'
import { locationData, eventData } from '../data/information.js'


const createLocationsTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS locations;

    CREATE TABLE IF NOT EXISTS locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL
    )
    `
    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 locations table created successfully')
    } catch (err) {
        console.error('⚠️ error creating locations table', err)
    }
}

const seedLocationsTable = async () => {
    await createLocationsTable()

    locationData.forEach((location) => {
        const insertQuery = {
            text: 'INSERT INTO locations (name, address, image) VALUES ($1, $2, $3)'}
            const values = [
                location.name, 
                location.address, 
                location.image
            ]
            pool.query(insertQuery, values, (err, res) => {
                if (err) {
                    console.error('⚠️ error inserting location', err)
                    return
                }
                console.log(`✅ ${location.name} added successfully`)
            })
        })
}

seedLocationsTable()

const createEventsTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS events;
    CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        date TIMESTAMP NOT NULL,
        image VARCHAR(255),
        location_id INTEGER
    )
    `
    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 events table created successfully')
    } catch (err) {
        console.error('⚠️ error creating events table', err)
    }
}


const seedEventsTable = async () => {
    await createEventsTable()

    eventData.forEach((event) => {
        const insertQuery = { text: 'INSERT INTO events (title, date, image, location_id) VALUES ($1, $2, $3, $4)' }
        const values = [event.title, event.date, event.image, event.location_id]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting event', err)
                return
            }
            console.log(`✅ ${event.title} added successfully`)


        })
    })
}

seedEventsTable()
