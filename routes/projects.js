const express = require('express');
const router = express.Router();
const Project = require('../models/project').Project;

// Get Project
router.get('/:user', (req, res) => {
    Project.find({ user: req.params.user })
        .sort({ date: 1 })
        .then(projects => res.json(projects))
        .catch(err => console.log(err));
});

// Create Project
router.post('/', (req, res) => {
    let newProject = {
        name: req.body.name,
        deadline: req.body.deadline,
        description: req.body.description,
        user: req.body.user
    }
    Project.create(newProject)
        .then(projects => res.json(projects))
        .catch(err => console.log(err));
});

router.put('/:id', (req, res) => {
    Project.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.json({ success: true }))
        .catch(err => console.log(err));
});

router.delete('/:id', (req, res) => {
    Project.findById(req.params.id)
        .then(project => project.remove().then(() => res.json({ success: true })))
        .catch(err => console.log(err));
});

module.exports = router;
