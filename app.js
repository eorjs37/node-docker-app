const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql');
const dbconfig = require('./config/database');
const connection = mysql.createConnection(dbconfig);
const app = express();
const port = 3000;
const HOST = '0.0.0.0';
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

// lib config
dotenv.config();
//db connection
connection.connect(err => {
  if (err) throw err;
  console.log('Connected');
});

//router
const helloworldRouter = require('./src/router/helloworld');

app.use('/hello', helloworldRouter);

app.get('/', (req, res) => {
  console.log('진입');
  res.send('Hello World!');
});

app.listen(port, HOST, () => {
  console.log(`Running on http://${HOST}:${port}`);
});
