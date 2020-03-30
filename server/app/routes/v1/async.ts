/**
 * 非同期処理
 *
 */
var fs = require("fs");
var express = require("express");
var router = express.Router();

function readFileAsync(filename): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

async function loadJSONAsync(filename) {
  const res = await readFileAsync(filename);
  return JSON.parse(res);
}

function async() {
  console.log("start");
  loadJSONAsync("server/data/test.json")
    .then(data => {
      data.forEach(res => {
        console.log(`works: name:${res.name} age:${res.age}`);
      });
    })
    .catch(err => {
      console.log(`error: ${err}`);
    });
  console.log("end");
}
// GET  http://localhost:3000/api/v1/async/
router.get("/", function(req, res) {
  async();
  res.json({
    message: "This is async test api"
  });
});
//routerをモジュールとして扱う準備
module.exports = router;
