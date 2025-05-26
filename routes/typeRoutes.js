const express = require("express");
const router = express.Router();
const TypeController = require("../controllers/typeController");

router.get("/", TypeController.getAllTypes);

module.exports = router;