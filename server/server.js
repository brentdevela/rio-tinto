'use strict';
const lodash = require('lodash');
const moment = require('moment');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const data = require('./data');

module.exports = () => {
    app.get('/ideas', (req, res) => {
        res.send(data.ideas); // DUMMY
    });

    app.post('/idea', jsonParser, (req, res) => {
        const clonedIdea = lodash.cloneDeep(data.newIdea);
        clonedIdea.id = String(Number(lodash.last(data.ideas).id) + 1);
        clonedIdea.createdDate = moment().format('YYYY-MM-DD');
        data.ideas.push(clonedIdea);
        res.send(clonedIdea);
    });

    app.put('/idea', jsonParser, (req, res) => {
        const idea = req.body;
        const index = lodash.findIndex(data.ideas, (currentIdea) => currentIdea.id === idea.id);
        data.ideas[index] = idea;
        res.send(req.body);
    });

    app.del('/idea/:id', jsonParser, (req, res) => {
        lodash.remove(data.ideas, (idea) => idea.id === req.params.id);
        res.send(req.body);
    });

    return app;
};
