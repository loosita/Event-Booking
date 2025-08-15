# Event Booking System

![Node.js](https://img.shields.io/badge/Node.js-18-green)
![Docker](https://img.shields.io/badge/Docker-Ready-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

A Node.js-based Event Booking System that allows users to book events and receive notifications upon successful bookings. Fully containerized with Docker for easy deployment.

---

## Features

- Book Events: Users can create bookings for events.
- Notifications: Notifications are generated and saved when a booking is created.
- Retrieve Bookings: Users can retrieve their bookings by ID.

---

## Technologies Used

- Node.js & Express.js (API server)
- MongoDB & Mongoose (database)
- Docker & Docker Compose (containerization)

---

## Project Structure

Event-Booking/
├── server.js
├── utils/
├── config/
│   └── db.js
├── routes/
│   ├── bookingRoute.js
│   ├── eventsRoute.js
│   └── userRoute.js
├── models/
│   ├── bookingModel.js
│   ├── eventsModel.js
│   ├── notificationModel.js
│   └── userModel.js
├── controllers/
│   ├── bookingController.js
│   ├── eventController.js
│   └── userController.js
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
├── .env.example
└── README.md

---

## Installation and Setup

### 1. Local Setup (without Docker)

1. Clone the repository:
git clone https://github.com/loosia/event-booking.git
cd event-booking

2. Install dependencies:
npm install

3. Copy `.env.example` to `.env` and set environment variables:
PORT=3000
DATABASE_URL=mongodb://localhost:27017/event_booking

4. Run the server:
node server.js

---

### 2. Docker Setup (Recommended)

1. Make sure `.env` uses Docker service name for MongoDB:
DATABASE_URL=mongodb://mongo:27017/event_booking
PORT=3000

2. Build the Docker image:
docker build -t event-booking .

3. Run using Docker Compose:
docker-compose up --build

- The app will run at http://localhost:3000
- MongoDB runs in a separate container automatically

---

## Usage

- Access the API at http://localhost:3000
- Use Postman or any API client to create bookings, retrieve events, and get notifications

---

## Contributing

1. Fork the repository
2. Create your branch: git checkout -b feature/your-feature
3. Commit changes: git commit -m 'Add feature'
4. Push to branch: git push origin feature/your-feature
5. Open a pull request

---

## License

This project is licensed under the MIT License.

