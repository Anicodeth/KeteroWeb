const mongoose = require('mongoose')


const BusinessSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: [3, "Name must exceed 3 characters"]
    } ,
    email:{
        type: String,
        required: true,
        validate:{
            validator: function (value){
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
            },
            message: () => 'Not a valid email format'
        }
    },
    password: {
        type: String,
        required: true,
        minLength: [8, "Password must be at least 8 Characters"]
    },

    businessName: {
        type: String,
        required: true,
        minlength: [3, 'Business Name must be at least 3 characters long']
      }
      ,
    ownerName:{
        type: String,
        required: true,
      },
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
      }],

})


module.exports = mongoose.model('Business', BusinessSchema)