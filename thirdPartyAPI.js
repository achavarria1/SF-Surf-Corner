const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/data", function(req, res) {
  //http://magicseaweed.com/api/YOURAPIKEY/forecast/?spot_id=10
  http
    .get(
      "http://magicseaweed.com/api/3965fdc72e49a4a40dc9137682f5205a/forecast/?spot_id=819",
      resp => {
        //http.get('http://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        let data = "";

        // A chunk of data has been recieved.
        resp.on("data", chunk => {
          //console.log("data");
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          //console.log(JSON.parse(data));
          res.send(JSON.parse(data));
        });
      }
    )
    .on("error", err => {
      console.log("Error: " + err.message);
    });

});

app.get("/data2", function(req, res) {
  //http://magicseaweed.com/api/YOURAPIKEY/forecast/?spot_id=10
  http
    .get(
      "http://magicseaweed.com/api/3965fdc72e49a4a40dc9137682f5205a/forecast/?spot_id=819",
      resp => {
        //http.get('http://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        let data = "";

        // A chunk of data has been recieved.
        resp.on("data", chunk => {
          //console.log("data");
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          //console.log(JSON.parse(data));
          res.send(JSON.parse(data));
        });
      }
    )
    .on("error", err => {
      console.log("Error: " + err.message);
    });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
