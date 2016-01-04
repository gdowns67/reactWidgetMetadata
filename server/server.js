var logger = require('morgan');
var express = require('express');
var url = require('url');
var app = express();
var bodyParser = require('body-parser');

app.listen('8080');

var defaultPaths = {
    '/': '../reactWidgetMetadata',
    '/rest': '../reactWidgetMetadata/scripts/app/services/rest'
};

var map = function (resource, localPath) {
    app.use(resource, express.static(localPath));
};

for (var p in defaultPaths) {
    map(p, defaultPaths[p]);
}