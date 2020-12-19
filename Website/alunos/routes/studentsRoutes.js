var express = require('express');
var router = express.Router();
var lStudents = require('../models/studentsModel');

router.get('/', async function(req,res,next) {
    let students = await lStudents.getAllStudents();
    res.send(students);
});

router.get('/:pos', async function(req,res,next) {
    let pos = req.params.pos;
    let student = await lStudents.getStudent(pos);
    res.send(student);
});


router.put('/:pos/grades', async function(req,res,next) {
    let obj = req.body;
    let pos = req.params.pos;
    let result = await lStudents.saveGrade(pos,obj);
    res.send(result);
});

module.exports = router;