const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password', // Replace with your MySQL password
    database: 'contact_us_db'  // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

// API Routes

// Save Contact Message
app.post('/api/contact', (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    const query = 'INSERT INTO contact_messages (first_name, last_name, email, message) VALUES (?, ?, ?, ?)';
    db.query(query, [firstName, lastName, email, message], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving message');
        } else {
            res.status(201).send({ message: 'Message saved successfully!' });
        }
    });
});

// Start the Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});