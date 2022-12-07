const mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  database: 'squadproj',
  user: 'root',
  password: '',
});

connection.connect((error) => {
  if (error) {
    throw error;
  } else {
    console.log('MySQL connected successfully');
  }
});

const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello world!');
});

app.listen(3000);
