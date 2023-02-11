const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: { type: String, required: true },
  emails: { type: Array },
  type: {
    type: String,
    default: "Solo",
    enum: ["Solo", "Duo", "Squad"],
    required: true,
  },
  leader: { type: String, required: true },
  leader_id: { type: String, required: true },
  wallet: { type: Number, required: true },
});

const Team = mongoose.model("Team", teamSchema, "teams");
module.exports = Team;
