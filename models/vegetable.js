// Importing the mongoose module to create a schema and model
const mongoose = require('mongoose');

// Destructuring Schema from mongoose
const { Schema } = mongoose;

// Creating a new schema for vegetables with required attributes
const vegetableSchema = new Schema({
  name: { type: String, required: true }, // Name must be a string and is required
  color: { type: String, required: true }, // Color must be a string and is required
  isReadyToEat: { type: Boolean, default: false } // Boolean flag with a default of false
});

// Creating a model from the schema
const Vegetable = mongoose.model('Vegetable', vegetableSchema);

// Exporting the model so it can be used in other files
module.exports = Vegetable;
