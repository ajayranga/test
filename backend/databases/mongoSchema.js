const mongoose = require("mongoose");
const schema = mongoose.Schema;
const users = new schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  date: { type: Date, required: true },
  number: { type: String, required: true, unique: true },
  address: {
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
});
module.exports = mongoose.model("user", users);
