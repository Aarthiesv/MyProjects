const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
router.get("/", authController.getAuthData);
router.post("/", authController.addAuthData);
router.put("/", authController.updateAuthData);
router.delete("/", authController.deleteAuthData);
module.exports = router;
