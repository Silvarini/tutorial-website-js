var express = require('express');
var router = express.Router();
var lUnits = require('../models/unitsModel');


router.get('/', async function(req,res,next) {
    let units = await lUnits.getAllUnits();
    res.send(units);
});

module.exports = router;