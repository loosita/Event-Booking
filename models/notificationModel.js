const { mongoose } = require('mongoose');;

const notificationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    }}
);

module.exports = new mongoose.model('Notification', notificationSchema);

