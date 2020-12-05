
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

function calculate() {

    let name = document.getElementById("name").value;
    let studentIndex = 0;
    let unit = document.getElementById("unit").value;
    let semester = "";
    let etcs = 0;

    for (let student of listStudents){
        if(student.name = name){
            studentIndex = student.num;
        }
    }    

    for (let unit of listUnits){
        if(unit.name = unit){
            semester = unit.semester;
            etcs = unit.etcs;
        }
    }    

    

    
    let projectGrade = parseFloat(document.getElementById("project-grade").value);
    let percentageProject = parseFloat(document.getElementById("percentage-project").value);
    let testGrade = parseFloat(document.getElementById("test-grade").value);
    let percentageTest = parseFloat(document.getElementById("percentage-test").value);
    sum = percentageProject + percentageTest;
        if ((projectGrade!="") && (percentageProject!="") && (testGrade!="") && (percentageTest!="")){
            if(sum == 1){
                let finalGrade = projectGrade * percentageProject + testGrade * percentageTest;
                document.getElementById("result").innerHTML='Student '+ name +' with number '+studentIndex+' obtained '+ finalGrade.toFixed(1) +' on the ' + unit + ' unit ('+etcs+' ETCS) of the '+semester+'.';
            } else {
                alert("Percentage field's sum is not equal to 1");
            }
        } else {
            alert("Please, fill all grading fields");
        }

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