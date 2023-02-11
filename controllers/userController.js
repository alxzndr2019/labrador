const User = require("../models/userModel");

// Get all users
exports.getUsers = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
};

// Get a specific user by ID
exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
};

// Create a new user
exports.createUser = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const passwordHash = req.body.passwordHash;
  const phone_number = req.body.phone_number;
  const role = req.body.role;
  const accountNumber = req.body.accountNumber;
  const bank = req.body.bank;

  const newUser = new User({
    name,
    email,
    passwordHash,
    phone_number,
    role,
    accountNumber,
    bank,
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

// Update a user
exports.updateUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (req.body.name) {
        user.name = req.body.name;
      }
      if (req.body.email) {
        user.email = req.body.email;
      }
      if (req.body.passwordHash) {
        user.passwordHash = req.body.passwordHash;
      }
      if (req.body.phone_number) {
        user.phone_number = req.body.phone_number;
      }
      if (req.body.role) {
        user.role = req.body.role;
      }
      if (req.body.accountNumber) {
        user.accountNumber = req.body.accountNumber;
      }
      if (req.body.bank) {
        user.bank = req.body.bank;
      }

      user
        .save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).send("User not found.");
    res.send(deletedUser);
  } catch (error) {
    res.status(500).send(error);
  }
};
