var express = require('express');
var app = express();

var util = require('util');
var staticPath = __dirname + "/";

var voiceDrone = require('./drone/voiceDrone.js')();

var port = (process.env.PORT || 5000);
app.set('port', port);
app.listen(port, function () {
    console.log('App is running on port ' + port);
});


app.put('/voice', function(req,res) {
    voiceDrone.takeoff();
    console.log("I heard the voice command")
    res.sendStatus(200);

});

app.use(express.static(staticPath));

console.log('Server running');