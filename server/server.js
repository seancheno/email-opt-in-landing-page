var restify = require('restify');
var server = restify.createServer();
var request = require('request');
var corsMiddleware = require('restify-cors-middleware');

function subscribe(req, res, next) {
  var email = req.body.email;
  var dataCenter = '';
  var apiKey = '';
  var listID = '';
  //Request settings
  var options = {
    url: `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listID}/members`,
    method: 'POST',
    headers: { 'content-type': 'application/json', 'Authorization': `apikey ${apiKey}` },
    body: JSON.stringify({ email_address: email, status: 'subscribed' })
  }
  // Make a simple POST call to MailChimp
  request(options, function (error, response, body) {
    try {
      var respObj = {}; //Initial response object
      if (response.statusCode === 200) {
        respObj = { success: `Subscribed using ${email}!`, message: JSON.parse(response.body) };
      } else {
        respObj = { error: `An error occured while trying to subscribe ${email}. Please try again.`, message: JSON.parse(response.body) };
      }
      res.send(respObj);
    } catch (err) {
      var respErrorObj = { error: 'There was an error with your request', message: err.message };
      res.send(respErrorObj);
    }
  });
  next();
}

//Enable CORS Middleware
var cors = corsMiddleware({
  origins: ['http://localhost:3000']
});

server.use(restify.plugins.bodyParser());

//Use CORS...
server.pre(cors.preflight);
server.use(cors.actual);

//Subscribe endpoint
server.post('/', subscribe);

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});