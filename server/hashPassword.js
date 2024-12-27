const bcrypt = require('bcryptjs');

const password = 'abcdefghijklmnopqrstuvwxyz1234567890';  // This is the simple password entered by the user
bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
        console.error("Error hashing password:", err);
        return res.status(500).json({ message: 'Server error during password hashing' });
    }

    // Insert the new user into the database
    const insertQuery = 'INSERT INTO users (username, password_hash) VALUES (?, ?)';
    pool.query(insertQuery, [email, hashedPassword], (err, result) => {
        if (err) {
            console.error("Error inserting user:", err);
            return res.status(500).json({ message: 'Error inserting user' });
        }

        console.log('User registered successfully');
        res.status(201).json({ message: 'Registration successful' });
    });
});

