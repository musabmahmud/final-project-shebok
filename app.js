const express = require("express");
const env = require("dotenv");
const app = express();
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

// routes
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
const hireRoutes = require('./routes/hire');
const accountRoutes = require('./routes/account');
const notificationRoutes = require('./routes/notification');

// environment variable or you can say constants
env.config();

const DB = "mongodb+srv://musab:Mu$abmahmud100@cluster0.8gcyj.mongodb.net/finalProject?retryWrites=true&w=majority";

mongoose.connect(
    `${DB}`,
    { useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then(() => {
    console.log('DataBase Connected');
  });
// app.use(bodyParser());
app.use(cors());
app.use(express.json());
// app.use('/public', express.static(path.join(__dirname, 'uploads')));

app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('/api', postRoutes);
app.use('/api', userRoutes);
app.use('/api', hireRoutes);
app.use('/api', accountRoutes);
app.use('/api', notificationRoutes);


// const port = process.env.PORT || 5000;

app.listen(process.env.PORT || 5000, function () {
  console.log('Server listening on port 3000');
});