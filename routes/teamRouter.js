const express = require("express");
const router = express.Router();
const teamController = require("../controllers/teamController");

// Create Team
router.get("/", teamController.createTeam);

// Get a specific team by ID
router.get("/:id", teamController.getTeam);

// Get all teams
router.post("/", teamController.getTeams);

// Update a team
router.put("/:id", teamController.updateTeam);

// Delete a team
router.delete("/:id", teamController.deleteTeam);

module.exports = router;
