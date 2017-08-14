var express = require('express');
var path = require('path');
var fs = require('fs');
var url = require('url');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.listen(8080, function() {
    // var reqPath = url.parse(req.url).pathname;
    console.log('server listening on port 8080');
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/', function(req, res) {
    console.log("request recieved");
    var fileData = fs.readFileSync('data.json', 'utf-8');
    res.writeHead(200, {"Content-Type": "text/plain","Access-Control-Allow-Origin":"http://localhost"});
    res.send(fileData);
    console.log("data sent");
})

app.post('/', function(req, res) {
    // console.log(req.body);
    var jsonData = req.body;
    req.body.title.set
    delete jsonData.submit;
    var jsonString = JSON.stringify(jsonData);
    fs.writeFile('data.json', jsonString, function(err) {
        if(err) {
            return console.log(err);
        }
    });
    console.log(jsonData);
    res.end('Edit Success!');
})

// module.exports = function(imitator) {
//     imitator({
//         url: '/',
//         result: JSON.parse(fs.readFileSync('data.json', 'utf-8'))
//     });
// }
