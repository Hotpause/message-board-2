const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.getMessages);

router.get("/new", indexController.getForm);

router.get("/messages/:id", indexController.getMessage);

router.post("/new", indexController.postForm);

module.exports = router;
