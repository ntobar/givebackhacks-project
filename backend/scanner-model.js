const async = require("async");
const ZapClient = require("zaproxy");
//const apiKey = process.env.API_KEY;
const apiKey = "6dui84di4q4f6v8qegq2ttkr0h";

exports.scanUrl = function (
  url,
  maxChildren,
  recurse,
  contextName,
  subtreeOnly,
  callbackg
) {
  // Initialization of parameters

  // configuration of api key and proxy

  const zapOptions = {
    apiKey: apiKey,
    proxy: "http://127.0.0.1:8080",
  };

  //Client creation
  const zaproxy = new ZapClient(zapOptions);

  async.waterfall(
    [
      function (callback) {
        /**
         * Spider the url
         */

        zaproxy.spider.scan(
          url,
          maxChildren,
          recurse,
          contextName,
          subtreeOnly,
          (err, resp) => {
            // All errors are handled here
            console.log("In spider scan");
            if (err) {
              console.info("Error:", err);
              let error = { statusCode: 422, error: err };
              callback(error);
            }
            // All valid responses are handled here
            if (resp) {
              console.info("Response:", resp);
              let result = resp.scan;
              console.info("result -> ", result);
              callback(null, result);
            }
          }
        );
      },
      function (scanId, callback) {
        console.info("Scan id from spider:", scanId);
        /**
         * Scan the url
         */
        let inScopeOnly = false;
        let scanPolicyName = null;
        let method = "GET";
        let postData = true;

        zaproxy.ascan.scan(
          url,
          recurse,
          inScopeOnly,
          scanPolicyName,
          method,
          postData,
          "",
          (err, resp) => {
            // All errors are handled here
            if (err) {
              console.info("Error:", err);
              let error = { statusCode: 422, error: err };
              callback(error);
            }
            // All valid responses are handled here
            if (resp) {
              console.info("Ascan Response:", resp);
              zaproxy.ascan.stop(resp.scan);
              console.log("**8888888");
              let result = resp;
              callback(null, result);
            }
          }
        );
      },
      function (ascanId, callback) {
        console.info("Scan id from ascan:", ascanId);
        /*
             Scan the url
            */
        zaproxy.core.jsonreport((err, resp) => {
          //zaproxy.core.jsonreport((err, resp) => {
          //  All errors are handled here
          if (err) {
            console.info("Error:", err);
            let error = { statusCode: 422, error: err };
            callback(error);
          }
          // All valid responses are handled here
          if (resp) {
            console.info("Json Response:", resp);
            let result = resp;
            callback(null, result);
          }
        });
      },
    ],
    function (err, result) {
      callbackg(err, result);
    }
  );
};
