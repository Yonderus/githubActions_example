const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url == "/") res.end("Hola des de Node.js");
  else {
    res.writeHead(404);
    res.end("No trobat");
  } 
});

server.listen(PORT, () => {
  console.log(`Servidor escoltant al port ${PORT}`);
});