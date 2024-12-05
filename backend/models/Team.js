const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: String,
  role: String,
  description: String,
  image: String,
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;