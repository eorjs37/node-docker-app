const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql');
const dbconfig = require('./config/database')
const connection = mysql.createConnection(dbconfig);
const app = express()
const port = 3000
const HOST = '0.0.0.0';

// lib config
dotenv.config();
connection.connect(err=>{
    if(err) throw err;
    console.log('Connected');
})

app.get('/', (req, res) => {
    console.log("진입")
    res.send('Hello World!')
})

app.get('/users', (req, res) => {
    connection.query('SELECT * from Users', (error, rows) => {
        if (error) throw error;
        console.log('User info iss: ', rows);
        res.send(rows);
    });
});


app.listen(port, HOST,() => {
    console.log(`Running on http://${HOST}:${port}`);
})