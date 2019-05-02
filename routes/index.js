const express = require('express');
const router = express.Router();
const data = require('../data.json');
const { projects } = data;

router.get('/', (req, res) => {
    res.locals.projects = projects;
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project', (req, res) => {
    const project = projects[0];
    res.locals.project = project;
    res.render('project');
});

router.get('/project/:id', (req, res) => {
    let id = req.params.id;
    if (!id) {
        id = 0;
    }
    const project = projects[id];
    res.locals.project = project;
    res.render('project');
});

module.exports = router;