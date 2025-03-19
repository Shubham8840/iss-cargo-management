require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://admin:admin@localhost:27017/iss_cargo';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(" Connected to MongoDB"))
.catch(err => console.error(" MongoDB connection error:", err));

