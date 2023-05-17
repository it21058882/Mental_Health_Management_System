/*const express = require ("express");
const router = express.Router();

const {addDoctor} = require("../controllers/doctor");
router.post("/doctor", addDoctor);


module.exports = router;*/
const express = require ("express");
const {createChannel,getAllChannels,getChannelbuUID,updateChannel,deleteChannel} = require("../controllers/channel");

const router = express.Router(); //set routers


router.post("/channel", createChannel);
router.get("/getchannels", getAllChannels);
router.get("/:id", getChannelbuUID);
router.put("/updatechannel/:id", updateChannel);
router.delete("/deletechannel/:id", deleteChannel);


module.exports = router