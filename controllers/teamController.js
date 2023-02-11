const Team = require("../models/teamModel");

exports.createTeam = async (req, res, next) => {
  try {
    const team = new Team({
      name: req.body.name,
      emails: req.body.emails,
      type: req.body.type,
      leader: req.body.leader,
      leader_id: req.body.leader_id,
      wallet: req.body.wallet,
    });
    const newTeam = await team.save();
    res.status(201).json({
      message: "Team created successfully",
      team: newTeam,
    });
  } catch (err) {
    next(err);
  }
};

exports.getTeams = async (req, res, next) => {
  try {
    const teams = await Team.find({});
    res.status(200).json({
      message: "Teams fetched successfully",
      teams: teams,
    });
  } catch (err) {
    next(err);
  }
};

exports.getTeam = async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) {
      const error = new Error("Team not found");
      error.status = 404;
      throw error;
    }
    res.status(200).json({
      message: "Team fetched successfully",
      team: team,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateTeam = async (req, res, next) => {
  try {
    const team = await Team.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        emails: req.body.emails,
        type: req.body.type,
        leader: req.body.leader,
        leader_id: req.body.leader_id,
        wallet: req.body.wallet,
      },
      { new: true }
    );
    if (!team) {
      const error = new Error("Team not found");
      error.status = 404;
      throw error;
    }
    res.status(200).json({
      message: "Team updated successfully",
      team: team,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteTeam = async (req, res, next) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.id);
    if (!team) {
      const error = new Error("Team not found");
      error.status = 404;
      throw error;
    }
    res.status(200).json({
      message: "Team deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};
