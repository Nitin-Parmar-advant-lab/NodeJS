const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/*
app.use("/list", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="item"><button type="submit">ADD</button></input></form>',
  );
});

app.use("/product", (req, res, next) => {
  console.log("second middleware");
  console.log(req.body);
  res.redirect("/");
});

app.use((req, res, next) => {
  res.send("<h1>This is me</h1>");
});
*/

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
