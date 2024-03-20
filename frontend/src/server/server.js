const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Client } = require('pg');

const app = express();
const port = 3001; // Choose a port for your server

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

// Connect to the PostgreSQL database
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'onlineusers',
    password: 'newyork1905',
    port: 5432,
});

client.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch(err => console.error('Connection error', err.stack));

app.use(bodyParser.json());

// Route to handle form data submission
app.post('/api/users/register', async (req, res) => {
    console.log('Received POST request to /api/users/register');
    const { name, username, password } = req.body;
    console.log('Form data:', { name, username, password });
    try {

       const existingUser = await client.query('SELECT * FROM onlineusers WHERE username = $1 OR name = $2 OR password = $3', [username, name, password]);

         if (existingUser.rows.length > 0) {
          return res.status(400).json({ message: 'User already exists. Please log in.' });

         }
        // Insert the user data into the database
        await client.query('INSERT INTO onlineusers (name, username, password) VALUES ($1, $2, $3)', [name, username, password]);
        console.log('User inserted into database');
        res.status(201).json({ message: 'User created.' });
    } catch (error) {
        console.error('Error inserting user:', error);
        res.status(500).json({ message: 'Error querying database' });
    }
});
//Route to handle user login

//Route to handle user login
app.post('/api/users/login', async (req, res) => {
    console.log('Received POST request to /api/users/login');
    const { username, password } = req.body;
    console.log('login form data:', { username, password });

    try {
        const existingUser = await client.query('SELECT * FROM onlineusers WHERE username = $1 AND password = $2', [username, password]);

        if (existingUser.rows.length === 0) {
            return res.status(400).json({ message: "Invalid login, check your credentials" });
        }
        console.log('User logged in:', existingUser.rows[0]);
        res.status(200).json({ message: 'Login successful.', user: existingUser.rows[0] });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Error querying database' });
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
