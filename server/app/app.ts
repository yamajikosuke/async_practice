// ライブラリ読み込み
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORSを許可する
// https://qiita.com/tomoya_ozawa/items/feca4ffc6217d585b037
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var port = process.env.PORT || 3000; // port番号を指定

var router = require("./routes/v1");
app.use("/api/v1", router);
//画像表示
var publicDir = require("path").join(__dirname, "/images");
app.use(express.static(publicDir));
// var loveliveDir = require("path").join(__dirname, "/images/lovelive");
// var photoDir = require("path").join(__dirname, "/images/photo");
// var handDir = require("path").join(__dirname, "/images/hand");
// app.use(express.static(loveliveDir));
// app.use(express.static(photoDir));
// app.use(express.static(handDir));

//サーバ起動
app.listen(port);
console.log("listen on port " + port);
