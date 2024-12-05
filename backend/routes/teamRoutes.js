const express = require('express');
const { getTeams, createTeam, updateTeam, deleteTeam } = require('../controllers/teamController');
const router = express.Router();

router.get('/', getTeams);
router.post('/', createTeam);
router.put('/:id', updateTeam);
router.delete('/:id', deleteTeam);

module.exports = router;
