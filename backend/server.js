const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;

// init our app
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/api/goals', require('./routes/goalRoutes'));

// overwrite default error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
