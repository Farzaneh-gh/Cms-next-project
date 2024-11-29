const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

/* ongoose.models: This is a cache of all models that Mongoose has already defined.
||: If the model already exists in mongoose.models, it reuses the existing model instead of redefining it. */

const model = mongoose.models.Course || mongoose.model("Course", schema);

export default model;

