const express = require ("express");
const router = express.Router();

const {Register,Login,UpdateUser} = require("../controllers/userController");


router.post("/register", Register);
router.post("/login",Login);
router.patch("/updateuser",UpdateUser);

module.exports = router;