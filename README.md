# Event Booking System

This is a Node.js-based Event Booking System that allows users to book events and receive notifications upon successful bookings.

## Features
- Book Events: Users can create bookings for events.
- Notifications: Notifications are generated and saved when a booking is created.
- Retrieve Bookings: Users can retrieve their bookings by ID.

## Technologies Used
- Express.js: Web framework for building APIs.
- Mongoose: ODM for MongoDB.

## Project Structure
-server.js
-utils:
    -config
-routes:
    -bookingRoute.js
    -eventsRoute.js
    -userRoute.js
-models:
    -bookingModel.js
    -eventsModel.js
    -notificationModel.js
    -userModel.js
-controllers:
    -bookingController.js
    -eventController.js
    -userController.js
-config:
    -db.js

# Installation and Setup

1.git clone <repo>
2.cd Event_booking
3.npm install
4.node server.js (for running)

    
