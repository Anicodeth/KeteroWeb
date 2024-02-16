

const mongoose = require('mongoose');

// Base schema
const baseUserSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be at least 8 characters long']
  }
});

const discriminatorKey = 'role';

// User schema
const userSchema = new mongoose.Schema({}, { discriminatorKey });

// Admin schema
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, 'name must be at least 3 characters long']
  },
});
const Admin = userSchema.discriminator('admin', adminSchema);


const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, 'name must be at least 3 characters long']
  },
});
const Client = userSchema.discriminator('client', clientSchema);

// Business schema
const businessSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true,
    minlength: [3, 'Business Name must be at least 3 characters long']
  }
  ,
  OwnerName:{
    type: String,
    required: true,
  },
  services: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service'
  }],

});

const Business = userSchema.discriminator('business', businessSchema);

// Mezgeb schema
const mezgebSchema = new mongoose.Schema({
  mezgebName: {
    type: String,
    required: true
  },
  services: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service'
  }]
});
const Mezgeb = userSchema.discriminator('mezgeb', mezgebSchema);

// User schema (inherits from BaseUser)
const User = mongoose.model('User', baseUserSchema);

module.exports = { User}
