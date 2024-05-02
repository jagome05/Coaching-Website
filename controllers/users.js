const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Users = require("../model/Users");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Goals = require("../model/Goals");

const SALT = Number(process.env.SALT);
const JWT_KEY = process.env.JWT_SECRET_KEY;

// Get all users route
router.get("/all", async (req, res) => {
  try {
    const allUsers = await Users.find();
    res.status(200).json({
      message: "All users retrieved successfully",
      users: allUsers,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `${err}` });
  }
});

// Get user information route
router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await Users.findById(userId);
    if (!user) throw Error("User not found");

    res.status(200).json({
      message: "User information retrieved successfully",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: `${err}` });
  }
});

// Registration route
router.post("/register", async (req, res) => {
  let { firstname, lastname, email, password, adminCode } = req.body;

  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  try {
    let isAdmin = false; // Set isAdmin to false by default

    // Check if adminCode is correct
    if (adminCode === "0524") {
      isAdmin = true; // Set isAdmin to true if adminCode is correct
    }

    let newUser = new Users({
      firstname,
      lastname,
      email,
      password: bcrypt.hashSync(password, SALT),
      isAdmin,
    });
    await newUser.save();

    const token = jwt.sign(
      { _id: newUser._id },
      JWT_KEY,
      // Expire in 24 hours
      { expiresIn: 60 * 60 * 24 }
    );

    res.status(201).json({ message: "New user created", newUser, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `${err}` });
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const foundUser = await Users.findOne({ email });

    if (!foundUser) {
      throw Error("Invalid email or password");
    }

    const verify = await bcrypt.compare(password, foundUser.password);

    if (!verify) throw Error("Invalid email or password");

    const token = jwt.sign(
      { _id: foundUser.id },
      JWT_KEY,
      // Expire in 24 hours
      { expiresIn: 60 * 60 * 24 }
    );

    res.status(200).json({
      message: "Logged in",
      foundUser,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: `${err.message}` });
  }
});

router.get("/:userId/goals", async (req, res) => {
  const userId = req.params.userId;

  try {
    // Retrieve goals associated with the user
    const userGoals = await Goals.find({ user: userId }).populate("user");

    res
      .status(200)
      .json({ message: "User's goals retrieved successfully", userGoals });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// Update user information
router.put("/update/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const { firstname, lastname, email, password, isAdmin } = req.body;

    const userToUpdate = await Users.findById(userId);
    if (!userToUpdate) throw Error("User not found");

    if (firstname) userToUpdate.firstname = firstname;
    if (lastname) userToUpdate.lastname = lastname;
    if (email) userToUpdate.email = email;
    if (password) userToUpdate.password = bcrypt.hashSync(password, SALT);
    if (isAdmin) userToUpdate.isAdmin = isAdmin;

    await userToUpdate.save();

    res.status(200).json({
      message: "User updated successfully",
      updatedUser: userToUpdate,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `${err}` });
  }
});

// Delete user route
router.delete("/delete/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const userToDelete = await Users.findById(userId);
    if (!userToDelete) throw Error("User not found");

    await userToDelete.remove();

    res.status(200).json({
      message: "User deleted successfully",
      deletedUser: userToDelete,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `${err}` });
  }
});

module.exports = router;
