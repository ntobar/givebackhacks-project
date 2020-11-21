const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { createContext, removeContext } = require("./context");

const app = express();
const port = process.env.PORT || 3000;


//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client

// app page
app.post("/scan", (req, res) => {
    console.log(req.body);
    let url = req.body.uri;//"http://www.itsecgames.com";
    
    createContext(req, res, "Default", url);
});

app.get("/", (req,res) => {
  res.send("Hello there!");
});



app.listen(port, () => {
  console.log(`Server running on http://127.0.0.1:${port}/ ...`);
});
