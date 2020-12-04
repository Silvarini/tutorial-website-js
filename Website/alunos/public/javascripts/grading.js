function reset() {

    document.getElementById("name").value="";//input will now be empty => reset
    document.getElementById("unit").value="";//input will now be empty => reset
    document.getElementById("project-grade").value="";//input will now be empty => reset
    document.getElementById("percentage-project").value="";//input will now be empty => reset
    document.getElementById("test-grade").value="";//input will now be empty => reset
    document.getElementById("percentage-test").value="";//input will now be empty => reset

}

function calculate() {

    let projectGrade = parseFloat(document.getElementById("project-grade").value);
    let percentageProject = parseFloat(document.getElementById("percentage-project").value);
    let testGrade = parseFloat(document.getElementById("test-grade").value);
    let percentageTest = parseFloat(document.getElementById("percentage-test").value);
    sum = percentageProject + percentageTest;
    alert(sum);
        if ((projectGrade!="") && (percentageProject!="") && (testGrade!="") && (percentageTest!="")){
            if(sum == 1){
                let finalGrade = projectGrade * percentageProject + testGrade * percentageTest;
                document.getElementById("result").innerHTML='Student '+  document.getElementById("name").value +' obtained '+ finalGrade.toFixed(1) +' on the ' + document.getElementById("unit").value + ' unit.';
            } else {
                alert("Percentage field's sum is not equal to 1");
            }
        } else {
            alert("Please, fill all grading fields");
        }

} 