const { mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roll:{
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    }
});

module.exports = new mongoose.model('User', userSchema);