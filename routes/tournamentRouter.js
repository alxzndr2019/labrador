const express = require("express");
const router = express.Router();
const tournamentController = require("../controllers/tournamentController");

// Get all tournaments
router.route("/").get(tournamentController.getTournaments);

// Get tournament by ID
router.route("/:id").get(tournamentController.getTournamentById);

// Add tournament
router.route("/").post(tournamentController.addTournament);

// Update tournament

router.route("/:id").put(tournamentController.updateTournament);

// Delete tournament

router.route("/:id").delete(tournamentController.deleteTournament);
