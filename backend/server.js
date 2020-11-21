const ZapClient = require("zaproxy");
const express = require("express");
const bodyParser = require("body-parser");
const { listVuln } = require("./scanner");
const { createContext, removeContext } = require("./context");

const app = express();
const port = 3000;

const url = 'http://www.itsecgames.com';
// app page
app.get("/", (req, res) => {
  createContext(req, res, "Default", url);
});


//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client


app.listen(port, () => {
  console.log(`Server running on http://127.0.0.1:${port}...`);
});
