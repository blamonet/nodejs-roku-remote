var express = require("express"), app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get("/apps", function (request, response) {
  var url = request.query.url;
  var request_api = require('request-json');
  var client = request_api.createClient(url);
  client.get('/query/apps', function (error_api, response_api, body_api) {
      response.end(body_api);
  });
});

app.listen(port);
console.log("Roku remote server started http://localhost:"+port);
