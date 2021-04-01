const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req,res) => {
    Workout.find({})
    //1 ascending order
    .sort({_id: 1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
router.get("/api/workouts/range", (req,res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
router.post("/api/workouts", ({body}, res) => {
    Workout.create(body).then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
router.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      // "runValidators" will ensure new exercises meet our schema requirements
      { new: true, runValidators: true }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
module.exports = router;