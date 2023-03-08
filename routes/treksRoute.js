const express = require('express');
const router = express.Router();
const treksCtrl = require("../controllers/treksCtrl");

router.get("/", treksCtrl.getTreksList);
router.post("/add", treksCtrl.createTrek);
router.put("/update", treksCtrl.updateTrek);

module.exports = router;