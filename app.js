const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql');
const dbconfig = require('./config/database');
const connection = mysql.createConnection(dbconfig);
const app = express();
const port = 3000;
const HOST = '0.0.0.0';
const pool = require('./src/db/poolConection');

// lib config
dotenv.config();
//db connection
connection.connect(err => {
  if (err) throw err;
  console.log('Connected');
});

//router
app.get('/', (req, res) => {
  console.log('진입');
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  connection.query('SELECT * from Users', (error, rows) => {
    if (error) throw error;
    console.log('User info iss: ', rows);
    res.send(rows);
  });
});

app.get('/test', (req, res, next) => {
  pool.getConnection((err, connection) => {
    console.log('connection_pool GET');
    if (err) throw err;
    connection.query('SELECT * from Users', (error, rows) => {
      if (error) throw error;
      console.log('User info iss: ', rows);
      res.send(rows);
    });
    connection.release(); // Connectino Pool 반환
  });
});

app.listen(port, HOST, () => {
  console.log(`Running on http://${HOST}:${port}`);
});
