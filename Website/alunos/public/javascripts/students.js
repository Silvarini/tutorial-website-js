let listStudents= [
    {name: "John Smith", number:201, id:6},
    {name: "Mary Jane", number:512, id:31},
    {name: "Jane Dow", number:45, id:3},
];


function studentSlot(list) { 
    let slot = "";
    for (let student of listStudents){
        slot +=
        '<section class = "student-slot"><h1 id = "student-name">'+student.name+'</h1><h2 id = "student-number">Number: '+student.number+'</h2></section>';
    }
    return slot;
}    

function showStudent(position) {
    sessionStorage.setItem("itemPos", position);
    sessionStorage.setItem("studentName", listStudents[position].name);
    window.location = "studentGrades.html";

}


window.onload =  function () {

    let html ="";
    for (let i in listStudents)
    html +=
    '<section class = "student-slot"  onclick = "showStudent('+i+')"><h1 id = "student-name">'+listStudents[i].name+'</h1><h2 id = "student-number">Number: '+listStudents[i].number+'</h2></section>';

    document.getElementById('students');
    students.innerHTML = html;
}