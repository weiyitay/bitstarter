express = require('express');
fs = require('fs');

var app = express.createServer(express.logger());

var buffer1 = fs.readFileSync("index.html");

var string1 = buffer1.toString();

app.get('/', function(request, response) {
  response.send(string1);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
