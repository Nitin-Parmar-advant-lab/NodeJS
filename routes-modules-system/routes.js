const fs = require("fs");

const reqestHandler = (req, res) => {
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
};

// module.exports = reqestHandler;

// module.exports = { handler: reqestHandler, someText: "Some hard coded text" };

// module.exports.handler = reqestHandler;
// module.exports.someText = "This is some text";

exports.handler = reqestHandler;
exports.someText = "This is some text";
