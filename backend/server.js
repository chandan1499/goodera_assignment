const express = require('express');
const connect = require('./src/configs/db');

const app = express();
app.use(express.json());

const jobController = require('./src/controllers/jobs.controller');
app.use('/jobs', jobController);

const start = async () => {
    await connect();

    app.listen(8080, () => {
        console.log('listening on port 8080');
    });
}

module.exports = start;