const http = require('http');

// create server
const server = http.createServer((req, res) => {

  // routing
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to the HOME Page");
  } 
  else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to About Page");
  } 
  else if (req.url === "/contact" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to Contact Page");
  } 
  else if (req.url === "/courses" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to Courses Page");
  } 
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Page Not Found");
  }

  // end response
  res.end();
});

// server listen
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
