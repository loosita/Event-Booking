const eventModel = require('../models/eventsModel');
const userModel = require('../models/userModel');

const createEvent = async (req, res) => {
  try{
    const userRoll = req.query.roll;
    if(userRoll !== 'admin') {
      return res.status(403).json({ message: ' Only admins can create events.' });
    }
    else{
      const event = new eventModel(req.body);
      await event.save();
      res.status(201).json(event);
    }
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
}}

const getAllEvents = async (req, res) => {
  try {
    const events = await eventModel.find();
    res.status(200).json(events);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
}

const getEventById = async (req, res) => {
  try {
    const event = await eventModel.findById(req.params.eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
}

module.exports = { createEvent, getAllEvents, getEventById };