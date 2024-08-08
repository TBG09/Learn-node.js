// Ai generated code, to test capabilities of node.js or just js in general acctually.  
const http = require('http');
const useragent = require('useragent'); // For parsing user-agent strings

const PORT = 3000; // Change to your chosen port

const server = http.createServer((req, res) => {
  // Get client IP address
  const clientIp = req.connection.remoteAddress || req.socket.remoteAddress;

  // Get User-Agent header from request
  const userAgent = req.headers['user-agent'];

  // Parse user-agent string
  const agent = useragent.parse(userAgent);

  // Print client information
  console.log(`Client IP: ${clientIp}`);
  console.log(`Client Platform: ${agent.os.toString()}`);
  console.log(`Client Browser: ${agent.toAgent()}`);

  // Respond with plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, this is a simple HTTP server for testing!');
});

server.listen(PORT, () => {
  console.log(`HTTP server listening on port ${PORT}`);
});
