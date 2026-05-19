// node has some build in core modules that we don't need to install
// like: http, https, fs, path, os

// old way
const http = require("http");

// ES6 way: but this require package.json and in that configration of "type": "module"
// import http from "http";

// const rqListener = (req, res) => {
// }
// http.createServer(rqListener);

const server = http.createServer((req, res) => {
  // for quit the server after processing req
  // process.exit();
  console.log(req.url, req.method);

  res.setHeader('Content-Type', 'text/html')
  res.write("<html><body>Hello</body></html>")
  res.end()
});

server.listen(3000);

// EventLoop:
// in node.js program lifecycle, we execture the program and then it will start script and parse code, register variables & functions, and the server keep running
// server does not stop and keep going is because of the evetlopp which note js used inside

// EventLoop is loop which is managed by nodejs which keeps on running as long as there is work todo, it's keeps running as long as there are event listeners registered
// one event listener registered is the req listener which is waiting for incomming requests

// as there is even listern so that event loop keep running,
// node js uses such an event driven approach for all kind of stuff, like for databse request, waiting for req, connect to other apis and take response from apis, and so on

// node js use this pattern because it actually executes single threaded Javascript. Entire node process basically uses one thread on our computer it's running on.
