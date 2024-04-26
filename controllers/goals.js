const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../model/Users");
const Goals = require("../model/Goals");
const authToken = require("../middleware/tokenAuth");

// Endpoint to display all goals
router.get("/all", async (req, res) => {
  try {
    const allGoals = await Goals.find();
    res.status(200).json({ message: "Here are the goals", allGoals });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// Endpoint to get a goal by ID
router.get("/:goalsId", async (req, res) => {
  const goalsId = req.params.goalsId;

  try {
    const goals = await Goals.findById(goalsId);

    if (!goals) {
      return res.status(404).json({ message: "Goal not found" });
    }

    res.status(200).json({ message: "Goal found", goals });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// Endpoint to create a new goal
router.post("/new", authToken, async (req, res) => {
  const { name, description } = req.body;
  const userId = req.user._id; // Access the logged-in user's ID from req.user

  try {
    let newGoal = new Goals({
      name,
      description,
      user: userId, // Associate the goal with the logged-in user
    });

    await newGoal.save();
    res.status(200).json({ message: "New Goal created.", newGoal });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

// Endpoint to update a goal by ID
router.put("/update/:goalsId", authToken, async (req, res) => {
  const { name, description } = req.body;
  const goalsId = req.params.goalsId;

  try {
    const updatedGoal = await Goals.findByIdAndUpdate(
      goalsId,
      {
        name,
        description,
      },
      { new: true }
    );

    if (!updatedGoal) {
      return res.status(404).json({ message: "Goal not found" });
    }

    res.status(200).json({ message: "Goal updated", goal: updatedGoal });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// Endpoint to delete a goal by ID
router.delete("/delete/:goalsId", authToken, async (req, res) => {
  const goalsId = req.params.goalsId;

  try {
    const deletedGoal = await Goals.findByIdAndDelete(goalsId);

    if (!deletedGoal) {
      return res.status(404).json({ message: "Goal not found" });
    }

    res.status(200).json({ message: "Goal deleted", goal: deletedGoal });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// Endpoint to fetch goals by user ID
router.get("/user/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const userGoals = await Goals.find({ user: userId });

    if (!userGoals) {
      return res.status(404).json({ message: "No goals found for this user" });
    }

    res.status(200).json({ message: "User goals found", goals: userGoals });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
