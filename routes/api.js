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

router.post("/api/workouts", ({body}, res) => {
    Workout.create(body).then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;