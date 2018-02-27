// All code below based on Class Activity-CatsApp
const express = require("express");

const burgers = require("../models/burgers.js");

const router = express.Router();
const orm = require("../config/orm.js");
const connection = require("../config/connection.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


router.post("/burgers", function(req, res) {
  burgers.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    console.log(req.body);
    res.json({id: result.insertID});
  });
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;
