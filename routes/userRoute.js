const { createUser, getUserById } = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.post('/',createUser);
router.get('/:userId', getUserById);

module.exports = router;