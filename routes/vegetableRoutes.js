// Importing necessary modules
const express = require('express');
const router = express.Router();
const Vegetable = require('../models/vegetable'); // Adjust the path as needed

// Index route to list all vegetables
router.get('/', async (req, res) => {
  try {
    const vegetables = await Vegetable.find(); // Getting all vegetables from the database
    res.render('vegetables/Index', { vegetables }); // Passing them to the view
  } catch (err) {
    res.send(err.message); // Handle errors
  }
});

// New route to display a form for creating a new vegetable
router.get('/new', (req, res) => {
  res.render('vegetables/New'); // The New view will have the form
});

// Create route to add a new vegetable to the database
router.post('/', async (req, res) => {
  try {
    await Vegetable.create(req.body); // Creating a new vegetable from the form input
    res.redirect('/vegetables'); // Redirecting to the list of vegetables
  } catch (err) {
    res.send(err.message); // Handle errors
  }
});

// Show route to display a single vegetable
router.get('/:id', async (req, res) => {
  try {
    const vegetable = await Vegetable.findById(req.params.id); // Finding a vegetable by ID
    res.render('vegetables/Show', { vegetable }); // Passing it to the Show view
  } catch (err) {
    res.send(err.message); // Handle errors
  }
});

// Exporting the router so it can be mounted in the main app file
module.exports = router;
