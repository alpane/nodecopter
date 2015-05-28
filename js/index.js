

$("#voice").live("vmousedown",function() {
    console.log(' Button has been clicked');

    $.ajax({
        'url' : 'http://localhost:5000/voice',
        'type' : 'PUT'
    });
});