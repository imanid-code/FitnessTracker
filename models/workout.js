const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Enter an exercise type',
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter an exercise name',
      },
      duration: {
        type: Number,
        required: 'Enter an exercise duration in minutes',
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
}, 
{toJSON: {virtuals: true}});
workoutSchema.virtual('totalDuration').get(function (){
  const duration = this.exercises.reduce((acc, cur) => {
    return acc + cur.duration;
  }, 0);
  console.log(duration);
  return duration;
})
//.model makes a copy of the schema , mongoose automatically looks for
//.model (name of model, name of schema)
const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;