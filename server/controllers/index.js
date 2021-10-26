const dbHelpers = require('../models/index.js').expensesItem;
const mongoose = require('mongoose');

const controllers = {
    getItems: function(req, res) {
        dbHelpers.find()
        .then(results => {
            console.log('find() results: ', results);

            res.status(200).send(results);
            console.log('Connected from getItems in controllers!');
        })
    }
}

module.exports = controllers;