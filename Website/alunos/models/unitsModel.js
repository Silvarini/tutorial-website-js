
var pool = require('./connection');
const courseId = 2;

module.exports.getAllUnits = async function() { 
    try {const sql = 'SELECT dis_id AS id, dis_nome AS name, dis_creditos AS ects, pla_semestre AS semester FROM disciplinas, planoestudos WHERE dis_id = pla_dis_id AND pla_cur_id = '+courseId;
        const units= await pool.query(sql);
        console.log(sql);
        return units;
    } catch (err) {
        console.log(err);
        return err;
    }
}
