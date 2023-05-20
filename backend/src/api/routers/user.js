const express = require ("express");
const router = express.Router();
const auth =require("../middleware/auth.js");

const {Register,Login,UpdateUser,ProfileView,ProfileDelete} = require("../controllers/userController");


router.post("/register", Register);
router.post("/login",Login);
router.patch("/updateuser",auth,UpdateUser);
router.get("/ProfileView/:userId",ProfileView);
router.delete("/ProfileDelete/:userId",ProfileDelete);

module.exports = router;