const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeptSchema = new Schema({
    name:String,
    email:String,
    phone:String,
  });

  module.exports = Dept = mongoose.model("department", DeptSchema);