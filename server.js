const express = require('express');
const connectDB = require('./config/db');
const { PORT } = require('./utils/config');
const eventRouter = require('./routes/eventsRoute');
const userRouter = require('./routes/userRoute');
const bookingRouter = require('./routes/bookingRoute');
const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/events', eventRouter);
app.use('/bookings', bookingRouter);

const server = async ()=>{
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

server();