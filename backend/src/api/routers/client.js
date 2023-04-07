const express = require ("express");
const { getAllClients, getClient, createClient, updateClient, deleteClient,  }  = require("../controllers/client");


const router = express.Router(); //set routers

router.get("/client", getAllClients);
//router.get("/getClientInfo/:email", getClientInfo);
router.post("/create", createClient);
router.put("/update/:id", updateClient);
router.delete("/delete/:id", deleteClient);
//router.post("/login", loginClient);
router.get("/:id", getClient);

module.exports = router