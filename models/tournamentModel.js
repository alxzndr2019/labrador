const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  name: { type: String, required: true },
  slots: { type: Number, required: true },
  price: { type: Number, required: true },
  game: { type: String, required: true },
  mode: { type: Array, required: true },
  fee: { type: Number, required: true },
  date: { type: Date, required: true },
  contestants: { type: Array },
  isPublic: { type: Boolean, required: true },
  banner: { type: String, required: true },
});

const Tournament = mongoose.model(
  "Tournament",
  tournamentSchema,
  "tournaments"
);
module.exports = Tournament;
