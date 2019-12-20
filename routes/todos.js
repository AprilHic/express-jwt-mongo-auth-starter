const express = require('express');
const router = express.Router();
const Todo = require('../models').Todo;

// Get Todo
router.get('/:user', (req, res) => {
  Todo.find({ user: req.params.user })
    .sort({ date: 1 })
    .then(projects => res.json(projects))
    .catch(err => console.log(err));
  });
  
// Create Project
router.post('/', (req, res) => {
  Todo.create(req.body)
    .then(projects => res.json(projects))
    .catch(err => console.log(err));
  });
  
router.put('/:id', (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ success: true }))
    .catch(err => console.log(err));
  });
  
router.delete('/:id', (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => todo.remove().then(() => res.json({ success: true })))
    .catch(err => console.log(err));
  });
  
  module.exports = router;
  