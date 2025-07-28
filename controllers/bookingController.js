const bookingModel = require('../models/bookingModel');
const notificationModel = require('../models/notificationModel');

const BookSomething = async ( req,res ) => {
    try {
        const booking = new bookingModel(req.body);
        await booking.save();
        const notification = new notificationModel({ 
            bookingId: booking._id,
            message: `Booking created successfully!`
        });
        await notification.save();
        console.log(`Notification created`);
        res.status(201).json(booking);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });   
    }
}

const getMyBooking = async (req, res) => {
    try {
        const booking = await bookingModel.findById(req.params.bookingId);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json(booking);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

module.exports = { BookSomething, getMyBooking };