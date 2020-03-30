var express = require("express");
var router = express.Router();

router.use("/article", require("./article"));
router.use("/async", require("./async"));

//routerをモジュールとして扱う準備
module.exports = router;
