const http = require("http");

const port = 8080;

const server = http.createServer(function (request, response) {
  console.log(request.url);

  response.writeHead(200, {
    "Content-Type": "text/plain"
  });

  response.end("Hello World");
});

server.listen(port, function () {
  console.log(`Server is listening on port ${port}`);
});
