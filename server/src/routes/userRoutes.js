const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getClients);
router.post("/add", userController.addClient);
router.delete("/delete", userController.deleteClient);
router.put("/update", userController.updateClient);

module.exports = router;
