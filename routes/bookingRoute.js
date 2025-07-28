const express = require('express');
const router = express.Router();
const { BookSomething,getMyBooking } = require('../controllers/bookingController');

router.post('/', BookSomething);
router.get('/:userId', getMyBooking);

module.exports = router;