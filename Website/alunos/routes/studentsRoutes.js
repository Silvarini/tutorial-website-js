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


router.put('/:studentId/grades/:unitId', async function(req,res,next) {
    let obj = req.body;
    let studentId = req.params.studentId;
    let unitId = req.params.unitId;
    let result = await lStudents.saveGrade(studentId, unitId, obj);
    res.send(result);
});

module.exports = router;