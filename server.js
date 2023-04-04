const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Configure middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase',
});

// Connect to MySQL
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Define API endpoints
app.get('/contacts', (req, res) => {
  connection.query('SELECT * FROM contacts', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post('/contacts', (req, res) => {
  const { name, phoneNumber } = req.body;
  connection.query(
    `INSERT INTO contacts (name, phone_number) VALUES ('${name}', '${phoneNumber}')`,
    (err, results) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
