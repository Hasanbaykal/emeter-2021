const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');



// import routes
const profileRoute = require('./routes/profiles');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/profile', profileRoute)


// atlas db
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// are we connected?
mongoose.connection.on('connected', () => {
    console.log('connected to db')
});

// routes
app.get('/', (req,res) => {
    res.send('Hey we are on home');
});


// listen to port
app.listen(3000);

// unbug 