let listStudents= [
    {name: "John", num:1, units: [
        {name: "Mathematics", grade: 8.3, semester: "3º semester", etcs: "6 ETCS"},
        {name: "Literature", grade: 11.2, semester: "2º semester", etcs: "6 ETCS"},
        {name: "Laws", grade: 18.5, semester: "1º semester", etcs: "3 ETCS"},
        {name:"Informatics", grade: 14.3, semester: "1º semester", etcs: "6 ETCS"},
        {name: "Cooking", grade: 7.4, semester: "2º semester", etcs: "3 ETCS"}, 
    ]},
    {name: "Mary", num:2, units: [
        {name: "Mathematics", grade: 10.3, semester: "3º semester", etcs: "6 ETCS"},
        {name: "Literature", grade: 9.2, semester: "2º semester", etcs: "6 ETCS"},
        {name: "Laws", grade: 8.5, semester: "1º semester", etcs: "3 ETCS"},
    ]},
    {name: "Anthony", num:3, units: [
        {name: "Mathematics", grade: 15.3, semester: "3º semester", etcs: "6 ETCS"},
        {name: "Laws", grade: 6.5, semester: "1º semester", etcs: "3 ETCS"},
    ]}
];


module.exports.getStudent = function(position) {return listStudents[position];}

module.exports.getAllStudents = function() {return listStudents;}

module.exports.saveGrade = function(posStudent,obj) {
    units = listStudents[posStudent].units;
    for (let unit of units){
        if(String(unit.name) == String(obj.name)){
            unit.grade = obj.grade;
            return { msg: 'Changed grade of unit '+ unit.name };
        } else{
            units.push(obj);
            return { msg: 'Added grade for unit '+ unit.name };
        }
    } 
}
