const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.get("/new", UsersController.New);
router.get("/show/:id", UsersController.Show);
router.post("/", UsersController.Create);


module.exports = router;
