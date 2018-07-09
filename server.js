const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const config = require('./server/config/config');
const dummyData = require('./server/defaultData/defaultData');

const app = express();
app.use(express.static(__dirname + "/client/build"));

app.use(bodyParser.json({extended: true, type: '*/*'}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://secret-earth-57818.herokuapp.com/");//http://localhost:3000
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
});
// Set up Mongoose
mongoose.connect(config.db_dev, {
    useMongoClient: true
}, (error) => {
    if (error) {
        console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
        throw error;
    }
    // feed some default data in DB.
    dummyData();
});

mongoose.Promise = global.Promise;


require('./server/routes')(app);
app.listen(config.port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server listening at http://localhost:${config.port}`);
    console.log('use Ctrl-C to stop this server');
});

// module.exports = app;


