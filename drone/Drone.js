module.exports = function (app) {
    var droneClient = app.get('drone');

    droneClient.takeOff();

    droneClient.after(5000, function () {
        this.clockwise(0.5);
    }).after(3000, function () {
        this.animate('flipLeft', 15);
    }).after(1000, function () {
        this.stop();
        this.land();
    });
};

