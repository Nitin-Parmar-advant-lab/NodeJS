// old way
const http = require("http");
const fs = require("fs");
const { log } = require("console");

const server = http.createServer((req, res) => {
  // for quit the server after processing req
  // process.exit();
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    const temp = "<body></body>";
    res.write("<html>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>',
    );
    res.write("</html>");

    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunkk) => {
      console.log(chunkk);
      body.push(chunkk);
    });

    return req.on("end", () => {
      const reaturnData = Buffer.concat(body).toString();
      const message = reaturnData.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html><body>Hello this is node </body></html>");
  res.end();
});

server.listen(3000);
