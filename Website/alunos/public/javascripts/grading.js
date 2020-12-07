
let listStudents= [
    {name: "John", num:1},
    {name: "Mary", num:2},
    {name: "Anthony", num:3}
];

let listUnits= [
    {name: "Mathematics", semester:"2º Semester", etcs:6},
    {name: "Literature", semester:"3º Semester", etcs:6},
    {name: "Laws", semester:"1º Semester", etcs:3},
    {name: "Informatics", semester:"1º Semester", etcs:6},
    {name: "Cooking", semester:"2º Semester", etcs:3},
];




function reset() {

    document.getElementById("name").value="";//input will now be empty => reset
    document.getElementById("unit").value="";//input will now be empty => reset
    document.getElementById("project-grade").value="";//input will now be empty => reset
    document.getElementById("percentage-project").value="";//input will now be empty => reset
    document.getElementById("test-grade").value="";//input will now be empty => reset
    document.getElementById("percentage-test").value="";//input will now be empty => reset

}


function verifyInvalidProjectValue(object) {
    let errorP = document.getElementById("error-project");

    if(object.projectGrade < 0 || object.projectGrade > 20) {
        errorP.innerHTML = 'Grades are between 0 and 20.';
        errorP.style.display = "block";
        return false;
    }
    return true;

}

function verifyInvalidTestValue(object) {
    let errorT = document.getElementById("error-test");

    if(object.testGrade < 0 || object.testGrade > 20) {
        errorT.innerHTML = 'Grades are between 0 and 20.';
        errorT.style.display = "block";
        return false;
    }
    return true;

}

function verifyInvalidPercentages(object) {
    let errorP = document.getElementById("error-project");
    let errorT = document.getElementById("error-test");
    let error = document.getElementById("error-percentage");

    if (object.percentageProject < 0 || object.percentageProject > 1) { 
        errorP.innerHTML = 'Percentages are between 0 and 1.';
        errorP.style.display = "block";
        return false;
    }

    if (object.percentageTest < 0 || object.percentageTest > 1) { 
        errorT.innerHTML = 'Percentages are between 0 and 1.';
        errorT.style.display = "block";
        return false;
    }

    sum = object.percentageProject + object.percentageTest;
    if(!(sum == 1)) {
        error.innerHTML = 'Percentages must add to 1.0.';
        error.style.display = "block";
        return false;
    }
    return true;


}

function verifyAndCalculate() {

    let grading = {
        name : String(document.getElementById("name").value),
        unit : String(document.getElementById("unit").value),
        projectGrade : parseFloat(document.getElementById("project-grade").value),
        percentageProject : parseFloat(document.getElementById("percentage-project").value),
        testGrade : parseFloat(document.getElementById("test-grade").value),
        percentageTest : parseFloat(document.getElementById("percentage-test").value),
        finalGrade : 0,
    };

    let correct = true;

    if (!verifyInvalidProjectValue(grading)) correct = false;
    if (!verifyInvalidTestValue(grading)) correct = false;
    if (!verifyInvalidPercentages(grading)) correct = false;
    if (!correct) return;

    for (let student of listStudents){
        if(student.name == grading.name){
            studentIndex = student.num;
        }
    }    

    for (let unit of listUnits){
        if(unit.name == grading.unit){
            semester = unit.semester;
            etcs = unit.etcs;
        }
    } 
    
    
    grading.finalGrade = grading.projectGrade * grading.percentageProject + grading.testGrade * grading.percentageTest;
    document.getElementById("result").innerHTML=
    'Student '+ grading.name +' with number '+studentIndex+' obtained '+ grading.finalGrade.toFixed(1) +' on the ' + grading.unit + ' unit ('+etcs+' ETCS) of the '+semester+'.';


    let json = JSON.stringify(grading);
    sessionStorage.setItem("grades",json);
    window.location = "grades.html";

}   


window.onload = function () {

    let studentSelect = "<option></option>";
    let unitSelect = "<option></option>";

    for(let student of listStudents) {
        studentSelect+='<option>'+student.name+'</option>';
    }
    document.getElementById("name").innerHTML = studentSelect;

    for(let unit of listUnits) {
        unitSelect+="<option>"+unit.name+"</option>";
    }
    document.getElementById("unit").innerHTML = unitSelect;




}