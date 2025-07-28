require('dotenv').config();

const settings = {
    PORT: process.env.PORT ,
    DATABASE_URL: process.env.DATABASE_URL
};

module.exports = settings;