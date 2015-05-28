var express = require('express');
var app = express();

require('./drone/Drone.js')();

var port = (process.env.PORT || 5000);
app.set('port', port);
app.listen(port, function () {
    console.log('App is running on port ' + port);
});
