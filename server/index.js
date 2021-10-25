const express = require('express');
const cors = require('cors');
// const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 4001;

const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
    console.log(`Listening from port ${port}!`);
})