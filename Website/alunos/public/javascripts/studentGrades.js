
let listOfUnits=[
    [
        {name: "Mathematics", grade: 8.3, semester: "3º semester", etcs: "6 ETCS"},
        {name: "Literature", grade: 11.2, semester: "2º semester", etcs: "6 ETCS"},
        {name: "Laws", grade: 18.5, semester: "1º semester", etcs: "3 ETCS"},
        {name:"Informatics", grade: 14.3, semester: "1º semester", etcs: "6 ETCS"},
        {name: "Cooking", grade: 7.4, semester: "2º semester", etcs: "3 ETCS"}, 
    ],
    [
        {name: "Mathematics", grade: 10.3, semester: "3º semester", etcs: "6 ETCS"},
        {name: "Literature", grade: 9.2, semester: "2º semester", etcs: "6 ETCS"},
        {name: "Laws", grade: 8.5, semester: "1º semester", etcs: "3 ETCS"},
    ],
    [
        {name: "Mathematics", grade: 15.3, semester: "3º semester", etcs: "6 ETCS"},
        {name: "Laws", grade: 6.5, semester: "1º semester", etcs: "3 ETCS"},
    ],
]


function validation(num) {
    let aux = '';
    if (num < 9.5){
        aux = 'class = "failed"';
    }
    return aux;
}


function unitSlot(list, position) { // returns all unit squares with their information for main tag.
    slot = "";
    let units = list[position];
    for (let unit of units){
        icon = unit.name.substring(0,2);
        slot +=
        '<section '+validation(unit.grade)+'class = "gradingSections">'+'<section id="top-of-slot"><h1 id="icon">'+icon+'</h1><section id="unit-grade"><h1>'+unit.name+'</h1>'+'<p>Grade: '+unit.grade+'</p></section></section><section id="bottom-of-slot"><p>Semester: '+unit.semester+'</p><p>ETCS: '+unit.etcs+'</p></section></section>';
    }
    return slot;
    
}



window.onload =  function () {
   
    let studentName = sessionStorage.getItem("studentName");
    document.getElementById('student');
    student.innerText = studentName + " grades";

    position = sessionStorage.getItem("itemPos");
    document.getElementById('grades');
    grades.innerHTML = unitSlot(listOfUnits,position);


    failed = 0; 
    passed = 0;
    sum = 0;
    let units = listOfUnits[position];
    for (let unit of units){
        if (unit.grade< 9.5){
            sum = sum;
            failed++;
        } else {
        sum = sum + unit.grade;
        passed++;
        }
    }

    average = 0;
    average = sum / passed;


    document.getElementById('summary');
    summary.innerHTML = '<summary><b>Average: '+average.toFixed(1)+'</summary><p>'+failed+' failed units</p><p>'+passed+' passed units</p></b>';
    
} 
