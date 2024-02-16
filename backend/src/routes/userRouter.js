const express = require("express");
const { UserController } = require("../controllers/index.js");

const router = express.Router();

router.route("/register").post(UserController.postRegisterUserCtrl);

// router.route("/login").post(UserController.postLoginUserCtrl);

module.exports = router;
