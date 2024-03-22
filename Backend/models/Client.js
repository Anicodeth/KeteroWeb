const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Name must exceed 3 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
      },
      message: () => "Not a valid email format",
    },
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "Password must be at least 8 Characters"],
  },

  phone: {
    type: String,
    required: true,
    unique: true,
  },
  pending: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reservation",
    },
  ],
  confirmed: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reservation",
    },
  ],
});

module.exports = mongoose.model("Client", ClientSchema);
