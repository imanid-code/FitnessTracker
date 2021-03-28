const monogoose = require("mongoose");
 
const Schema = monogoose.Schema;
 
const workoutSchema = new Schema ({
 
   name: {
       type: String,
   },
 
   exercise_type: {
       type: String,
   },
   duration: {
       type: Number,
   },
   weight_amount: {
       type: Number,
   },
   reps: {
       type: Number,
   },
   circuits: {
       type: Number,
   },
   distance: {
       type: Number,
   },
});
 
//.model makes a copy of the schema , mongoose automatically looks for
//.model (name of model, name of schema)
const Workout = monogoose.model("Workout", workoutSchema);
module.exports = Workout;
