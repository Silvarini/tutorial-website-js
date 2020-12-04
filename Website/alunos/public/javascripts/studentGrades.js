var studentName = "John Smith";
var studentGrades1 = {
    unit: "Mathematics",
    grade: "7.5",
}
var studentGrades2 = {
    unit: "Literature",
    grade: "11.2",
}
res1 = studentGrades1.unit.substring(0, 2);
res2 = studentGrades2.unit.substring(0, 2);



window.onload =  function () {
    document.getElementById('student');
    student.innerText = studentName + " grades";


    let aux = '';
    if (studentGrades1.grade < 9.5){
        aux = 'class = "failed"';
    }

    document.getElementById('grades');
    grades.innerHTML = 
    '<section '+aux+'class = "gradingSections"><section class = "unitSection">'+'<h1 class = "icon-class">'+res1+'</h1><h1 class = "unit-title">'+studentGrades1.unit+'</h1></section>'+'<section class = "gradeSection"><p>Grade: '+studentGrades1.grade+'</p></section></section>'+'<section class = "gradingSections"><section class = "unitSection">'+'<h1 class = "icon-class">'+res2+'</h1><h1 class = "unit-title">'+studentGrades2.unit+'</h1></section>'+'<section class = "gradeSection"><p>Grade: '+studentGrades2.grade+'</p></section></section>';
} 
