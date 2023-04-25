const express = require('express');
const router = express.Router();
const pool = require('../db/poolConection');
const connection = require('../db/connection');
router.get('/', (req, res) => {
  pool.getConnection((err, connection) => {
    console.log('connection_pool GET');
    if (err) throw err;
    connection.query('SELECT * from Users', (error, rows) => {
      if (error) throw error;
      console.log('User info rows: ', rows);
      res.send(rows);
    });
    connection.release(); // Connectino Pool 반환
  });
});

module.exports = router;
