var request = require('requests'),
    geojson = require('geojson'),
    express = require('express'),
    path = require('path');


var app = express();

app.set('port', (process.env.PORT || 5000));

app.use("/src", express.static('./src'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(app.get('port'), function () {
    console.log("App listening on port " + app.get('port'));
});