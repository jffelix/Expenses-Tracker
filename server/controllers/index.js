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
    },
    
    postItems: function(req, res) {
        console.log('req.body: ', req.body);

        dbHelpers.create(req.body)
        .then(results => {
            res.status(200).send(results);
            console.log('Connected from postItems in controllers!');
        })
        .catch(err => {
            res.status(400).send(err);
            console.log('Error received from postItems in controllers.');
        })
    },

    deleteItems: function(req, res) {
        var id = {
            _id: req.params.id
        }

        console.log('Hello from deleteItems in controllers!');
    }
}

module.exports = controllers;