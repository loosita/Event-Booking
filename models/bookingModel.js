const { mongoose } = require('mongoose');

const bookingsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    eventId:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Event'
    }
});

module.exports = new mongoose.model('Booking', bookingsSchema);