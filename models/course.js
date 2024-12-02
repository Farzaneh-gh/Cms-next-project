const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, // Removes extra spaces
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Ensures price is non-negative
  },
  teacher: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    name: { type: String },
    data: { type: Buffer },
    contentType: { type: String },
  },
});

// Use existing model if already defined
const model = mongoose.models.Course || mongoose.model("Course", schema);

export default model;
