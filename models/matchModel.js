const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  game: { type: String, required: true },
  winner: { type: String, required: true },
  contestants: { type: Array, required: true },
  date: { type: Date, required: true },
});

const Match = mongoose.model("Match", matchSchema, "matches");
module.exports = Match;
