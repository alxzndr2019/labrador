const Match = require("../models/matchModel");

exports.createMatch = async (req, res) => {
  try {
    const match = new Match(req.body);
    await match.save();
    res.status(201).send(match);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.getAllMatches = async (req, res) => {
  try {
    const matches = await Match.find();
    res.status(200).send(matches);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.getMatch = async (req, res) => {
  try {
    const match = await Match.findById(req.params.id);
    if (!match) {
      return res.status(404).send({ error: "Match not found" });
    }
    res.status(200).send(match);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.updateMatch = async (req, res) => {
  try {
    const match = await Match.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!match) {
      return res.status(404).send({ error: "Match not found" });
    }
    res.status(200).send(match);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.deleteMatch = async (req, res) => {
  try {
    const match = await Match.findByIdAndDelete(req.params.id);
    if (!match) {
      return res.status(404).send({ error: "Match not found" });
    }
    res.status(200).send({ message: "Match deleted successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
