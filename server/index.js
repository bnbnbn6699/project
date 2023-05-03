var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var jwt = require('jsonwebtoken');
const secret = 'Fullstack-Login-2021'
const saltRounds = 10

app.use(cors())

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mydb'
  });

app.post('/contact', jsonParser, function (req, res) {
connection.execute(
    'INSERT INTO user (fname, email, text ) VALUES (?, ?, ?)',
    [req.body.fname, req.body.email, req.body.text],
    function(err, results, fields) {
        if (err) {
            res.json({status:'eror', message: err})
            return
        }
      res.json({status: 'ok'})
    }
  );
})


    app.listen(3333, function () {
  console.log('Example app listening on port 3333')
})
    