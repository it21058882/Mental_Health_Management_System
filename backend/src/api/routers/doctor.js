/*const express = require ("express");
const router = express.Router();

const {addDoctor} = require("../controllers/doctor");
router.post("/doctor", addDoctor);


module.exports = router;*/
const express = require ("express");
const {addDoctor,getAllDoctors,getDoctors,updateDoctors,deleteDoctors} = require("../controllers/doctor");

const router = express.Router(); //set routers


router.post("/doctor", addDoctor);
router.get("/getdoctor", getAllDoctors);
router.get("/:id", getDoctors);
router.patch("/updatedoctor/:id", updateDoctors);
router.delete("/deletedoctor/:id", deleteDoctors);


module.exports = router