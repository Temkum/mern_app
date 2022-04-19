const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectBD = require('./config/db');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

// load connection
connectDB();

// init app
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// overwrite default error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
