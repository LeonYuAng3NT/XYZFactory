const express = require('express');
const os = require('os');

const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
var logger = require('morgan');
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: 'root'
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM tasks", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

// this is our get method
// this method fetches all available data in our database
app.get('/getData', (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

// this is our update method
// this method overwrites existing data in our database
app.post('/updateData', (req, res) => {
    const { id, update } = req.body;
    Data.findByIdAndUpdate(id, update, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// this is our delete method
// this method removes existing data in our database
app.delete('/deleteData', (req, res) => {
    const { id } = req.body;
    Data.findByIdAndRemove(id, (err) => {
        if (err) return res.send(err);
        return res.json({ success: true });
    });
});

// this is our create methid
// this method adds new data in our database
ap.post('/putData', (req, res) => {
    let data = new Data();

    const { id, message } = req.body;

    if ((!id && id !== 0) || !message) {
        return res.json({
            success: false,
            error: 'INVALID INPUTS',
        });
    }
    data.message = message;
    data.id = id;
    data.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

const PORT = process.env.PORT || 3000