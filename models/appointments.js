const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  time: { type: String, required: true },
});

module.exports = model("Appointment", schema);
