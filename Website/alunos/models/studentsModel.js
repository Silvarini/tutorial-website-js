
var pool = require('./connection');

const courseId = 2;

module.exports.getStudent = async function(studentId) {    
    try {
        const sql = 'SELECT alu_id AS id, alu_nome AS name, 0 AS number FROM alunos WHERE alu_id = ?';
        let studentIds= await pool.query(sql,[ studentId ]);
        let student = studentIds[0];
        sql2 = 'SELECT dis_id AS id, dis_nome AS name, dis_creditos AS ects,'+
        ' pla_semestre AS semester, ins_nota AS grade, ins_id'+
        ' FROM disciplinas, planoestudos, inscricoes'+
        ' WHERE dis_id = pla_dis_id AND ins_pla_dis_id = pla_dis_id AND ins_alu_id = ? AND pla_cur_id = '+courseId;
        student.id = await pool.query(sql2,[studentId]); 
        console.log(sql2);
        return studentIds;
    } catch (err) {
        console.log(err);
        return err;
    }
}

module.exports.getAllStudents = async function() {
    try {
        const sql = 'SELECT alu_id AS id, alu_nome AS name, 0 AS number FROM alunos WHERE alu_cur_id = '+courseId;
        const students= await pool.query(sql);
        console.log(sql);
        return students;
    } catch (err) {
        console.log(err);
        return err;
    }
}

module.exports.saveGrade = async function(studentId, unitId, obj) { //obj = id inscricao e nota
    try {
        const sql2 = 'SELECT ins_alu_id AS studentId, dis_id AS unitId FROM inscricoes, planoestudos, disciplinas'+
        ' WHERE ins_pla_dis_id = pla_dis_id AND pla_dis_id = dis_id AND ins_id = ?';
        verification = await pool.query(sql2,[obj.id]); 
        let student = verification[0];
        if(student.studentId == studentId){
            if(student.unitId == unitId){
                const sql = 'UPDATE inscricoes SET ins_dt_avaliacao= ? , ins_nota= ? WHERE ins_id= ?';
                result = await pool.query(sql,[new Date(), obj.nota,obj.id]); 
                if (result.changedRows > 0) return { msg: 'Grade changed with sucess' }
                else return { msg: 'ERROR: That Incription doesnt exist' };
            } else return {msg: 'Unit ID is incorrect for that inscription ID'}
        } else return {msg: 'Student ID is incorrect for that inscription ID'}        
    } catch (err) {
        console.log(err);
        return err;
    }
}

