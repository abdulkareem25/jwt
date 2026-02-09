const mongoose = require('mongoose');

const connectDB = async () => {
    if (!process.env.DB_URI) {
        throw new Error("There is no DB_URI in enviroinment variables.");
    };

    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Database Connected...");
    } catch (err) {
        console.error('Database error:', err.message);
    };
};

module.exports = connectDB;