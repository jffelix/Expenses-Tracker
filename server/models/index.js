const mongoose = require('mongoose');
const itemList = require('../seeds.js');

const expensesItemSchema = new mongoose.Schema({
    item: {
        type: String,
        unique: true
    },
    price: {
        type: Number
    },
    date: {
        type: String
    }
});

var ExpensesItem = mongoose.model('Item', expensesItemSchema);

ExpensesItem.create(itemList)
.then(response => {
    console.log('response: ', response);
    console.log('Populated collection!');
})
.catch(err => {
    console.log('Error received at ExpensesItem.create in models');
})

module.exports.expensesItem = ExpensesItem;