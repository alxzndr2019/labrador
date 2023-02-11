const Tournament = require("../models/tournamentModel");
// Get all tournaments
exports.getTournaments = (req, res) => {
  Tournament.find()
    .then((tournaments) => res.json(tournaments))
    .catch((err) => res.status(400).json("Error: " + err));
};

// Get tournament by ID
exports.getTournamentById = (req, res) => {
  Tournament.findById(req.params.id)
    .then((tournament) => res.json(tournament))
    .catch((err) => res.status(400).json("Error: " + err));
};

// Add tournament
exports.addTournament = (req, res) => {
  const {
    name,
    slots,
    price,
    game,
    mode,
    fee,
    date,
    contestants,
    isPublic,
    banner,
  } = req.body;
  const newTournament = new Tournament({
    name,
    slots,
    price,
    game,
    mode,
    fee,
    date,
    contestants,
    isPublic,
    banner,
  });
  newTournament
    .save()
    .then(() => res.json("Tournament added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

// Update tournament
exports.updateTournament = (req, res) => {
  Tournament.findById(req.params.id)
    .then((tournament) => {
      tournament.name = req.body.name;
      tournament.slots = req.body.slots;
      tournament.price = req.body.price;
      tournament.game = req.body.game;
      tournament.mode = req.body.mode;
      tournament.fee = req.body.fee;
      tournament.date = req.body.date;
      tournament.contestants = req.body.contestants;
      tournament.isPublic = req.body.isPublic;
      tournament.banner = req.body.banner;
      tournament
        .save()
        .then(() => res.json("Tournament updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

// Delete tournament
exports.deleteTournament = (req, res) => {
  Tournament.findByIdAndDelete(req.params.id)
    .then(() => res.json("Tournament deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
};
