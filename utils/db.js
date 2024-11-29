const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    }
    await mongoose.connect("mongodb://localhost:27017/cms-project");
    console.log("connected to DB");
  } catch (error) {
    console.log("DB Connecction Error =>", err);
  }
};

export default connectToDB;
