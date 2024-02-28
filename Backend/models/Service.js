const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, 'Name must be at least 3 characters long']
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  image: {
    type: String,
  }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
