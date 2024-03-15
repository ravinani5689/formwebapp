const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Update with your MySQL username
  password: 'your_password', // Update with your MySQL password
  database: 'user_data'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Middleware for serving static files (e.g., HTML, CSS, client-side JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submissions
app.post('/submit', (req, res) => {
  const { name, email, age, dob } = req.body;

  // Insert user data into MySQL database
  const sql = 'INSERT INTO users (name, email, age, dob) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, age, dob], (err, result) => {
    if (err) {
      throw err;
    }
    console.log('User data inserted into database');
    res.send('Form submitted successfully!');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
