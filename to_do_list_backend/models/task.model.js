const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const AutoIncrement = require("mongoose-sequence")(mongoose);

let TasksSchema = new Schema(
  {
   id: { type: Number, default: 0 },
   date: {type:Date},
   author:{type:String},
   name:{type:String},
   status:{type:String}

  }
 
);

TasksSchema.plugin(AutoIncrement, { inc_field: "id" });
module.exports = mongoose.model("Task", TasksSchema);