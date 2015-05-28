module.exports = function () {

    var arDrone = require('ar-drone');
    var droneClient = arDrone.createClient();

    return {
        takeoff: function () {
            droneClient.takeoff();
        }
    };
};

