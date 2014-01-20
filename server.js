var connect = require('connect'),
    http = require('http'),
    directory = __dirname,
    port = process.env.PORT || 8080;

connect()
    .use(connect.logger())
    // Contact form
    .use(function (req, res, next) {
      if(req.method === 'POST') {
        if(req.url === '/contact'){
          console.log('Contact Request');
          req.on('data', function(chunk) {
            console.log("Received body data:");
            console.log(chunk.toString());
          });
          res.writeHead(200, "OK", {'Content-Type': 'text/html'});
          res.end();
        }
        else{
          next();
        }
      }
      else {
        next();
      }
    })
    .use(connect.static(directory))
    .listen(port);

console.log('Listening on port ' + port);

function sendEmail(name, email, phone, mesg){
  
}
