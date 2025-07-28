const express = require('express');
const router = express.Router();
const {createEvent, getAllEvents, getEventById} = require('../controllers/eventController.js');

router.post('/', createEvent);
router.get('/', getAllEvents);
router.get('/:eventId', getEventById);

module.exports = router;