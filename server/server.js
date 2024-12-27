const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const app = express();
const port = 3001;  // Change the port value to 3001 or any other free port

// Generate a 256-bit (32-byte) secret key in hexadecimal format for JWT
const secretKey = crypto.randomBytes(32).toString('hex'); 
console.log('Generated Secret Key:', secretKey);

// Middleware for parsing JSON
app.use(express.json());

// MySQL connection setup using connection pool for better management
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Shivani10',
    database: 'profileperfect',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Helper function to check password validity (alphanumeric only)
function isValidPassword(password) {
    const regex = /^[A-Za-z0-9]+$/;  // Alphanumeric only
    return regex.test(password);
}

// POST route for registration (new users)
app.post('/register', (req, res) => {
    const { email, password } = req.body;

    // Check if password is valid
    if (!isValidPassword(password)) {
        return res.status(400).json({ message: 'Password must contain only letters and numbers' });
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ message: 'Error hashing password' });
        }

        // Insert the new user into the database
        const insertQuery = 'INSERT INTO users (username, password_hash) VALUES (?, ?)';
        pool.query(insertQuery, [email, hashedPassword], (err, result) => {
            if (err) {
                console.error("Error inserting user:", err);
                return res.status(500).json({ message: 'Error registering user' });
            }

            console.log('User registered successfully');
            res.status(201).json({ message: 'Registration successful' });
        });
    });
});


// POST route for login
app.post('/login', (req, res) => {
    const { email, password, isRegistering } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    // Check password validity
    if (!isValidPassword(password)) {
        return res.status(400).json({ message: 'Password must contain only letters and numbers' });
    }

    if (isRegistering) {
        // Registration logic
        const selectQuery = 'SELECT * FROM users WHERE email = ?';
        pool.query(selectQuery, [email], (err, results) => {
            if (err) {
                console.error('Database query error:', err);
                return res.status(500).json({ message: 'Database error' });
            }

            if (results.length > 0) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // Hash the password and insert new user
            bcrypt.hash(password, 10, (err, hashedPassword) => {
                if (err) {
                    console.error('Error hashing password:', err);
                    return res.status(500).json({ message: 'Error hashing password' });
                }

                const insertQuery = 'INSERT INTO users (email, password_hash) VALUES (?, ?)';
                pool.query(insertQuery, [email, hashedPassword], (err, result) => {
                    if (err) {
                        console.error('Error inserting user:', err);
                        return res.status(500).json({ message: 'Error registering user' });
                    }

                    console.log('User registered successfully');
                    res.status(201).json({ message: 'Registration successful' });
                });
            });
        });
    } else {
        // Login logic
        const selectQuery = 'SELECT * FROM users WHERE email = ?';
        pool.query(selectQuery, [email], (err, results) => {
            if (err) {
                console.error('Database query error:', err);
                return res.status(500).json({ message: 'Database error' });
            }

            if (results.length === 0) {
                return res.status(400).json({ message: 'No user found with this email' });
            }

            const user = results[0];

            // Compare the provided password with the stored hashed password
            bcrypt.compare(password, user.password_hash, (err, isMatch) => {
                if (err) {
                    console.error('Error comparing passwords:', err);
                    return res.status(500).json({ message: 'Error during login' });
                }

                if (!isMatch) {
                    return res.status(401).json({ message: 'Invalid password' });
                }

                console.log('Login successful for user:', email);
                res.status(200).json({ message: 'Login successful' });
            });
        });
    }
});


// For root ("/") request to handle the "Cannot GET" error
app.get('/', (req, res) => {
    res.send('Welcome to the backend API!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});




   

