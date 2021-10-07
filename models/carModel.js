const mongoose = require("mongoose");

// New Schema Car

const carSchema = new mongoose.Schema({
  brand: {
    type: String,
  },

  model: {
    type: String,
  },

  year: {
    type: Number,
  },

  createdOne: {
    type: Date,
    default: Date.now(),
  },
});

// Setup 'Car' (collection nam ) from schema
module.exports = mongoose.model("Car", carSchema);
