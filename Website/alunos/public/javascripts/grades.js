window.onload = function () {

    let json  = sessionStorage.getItem("grades");
    let grades = JSON.parse(json);

    document.getElementById("grades").innerHTML = '<section><h2 id="subtitle-main">Grades of '+grades.name+' at unit '+grades.unit+'</h2><p>Grade of project: '+grades.projectGrade+'<br>Grade of test: '+grades.testGrade+'<br>Final grade: '+grades.finalGrade.toFixed(1)+' (project '+grades.percentageProject+'% + test '+grades.percentageTest+'%)</p></section>';

}
