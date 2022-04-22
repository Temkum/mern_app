const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectBD = require('./config/db');
const connectDB = require('./config/db');
const port = process.env.PORT || 3000;

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

// Server frontend
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set app to production mode'));
}

// overwrite default error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
