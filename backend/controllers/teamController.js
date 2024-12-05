const Team = require("../models/Team");


// Get all teams
exports.getTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.json(teams);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create new team
exports.createTeam = async (req, res) => {
    const { name, role, description, image } = req.body;
    try {
        const newTeam = new Team({ name, role, description, image });
        await newTeam.save();
        res.status(201).json(newTeam);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update team
exports.updateTeam = async (req, res) => {
    const { id } = req.params;
    const { name, role, description, image } = req.body;
    try {
        const team = await Team.findByIdAndUpdate(
            id,
            { name, role, description, image, updatedAt: Date.now() },
            { new: true }
        );
        res.json(team);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete team
exports.deleteTeam = async (req, res) => {
    const { id } = req.params;
    try {
        await Team.findByIdAndDelete(id);
        res.json({ message: 'Team deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
