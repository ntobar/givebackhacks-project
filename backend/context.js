var ZapClient = require("zaproxy");
const scan = require("./scanner");
//const apiKey = process.env.API_KEY;
const apiKey = "6dui84di4q4f6v8qegq2ttkr0h";
const zapOptions = {
  apiKey: apiKey,
  proxy: "http://127.0.0.1:8080",
};

const zaproxy = new ZapClient(zapOptions);
zaproxy.core;

exports.createContext = function (req, res, contextName, targetUrl) {
  zaproxy.context.newContext(contextName, () => {
    console.log("Contex Created");
    zaproxy.context.includeInContext(contextName, targetUrl, () => {
      console.log("Regex in context " + contextName);
      scan.scanUrl(req, res, targetUrl);
    });
  });
};

exports.removeContext = function (contextName) {
  zaproxy.context.removeContext(contextName, () => {
    console.log("Context Removed");
  });
};
