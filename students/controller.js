const pool = require("../db");
const queries = require("../students/queries");
exports.getStudents = async (req, res) => {
    try {
        const result = await pool.query(queries.getStudents);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}

exports.getStudentsbyid = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const result = await pool.query(queries.getStudentById, [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Student not found');
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}



exports.createStudent = async (req, res) => {
    const { name, age, dob } = req.body;
    try {
        const result = await pool.query(queries.insertStudent, [name, age, dob]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}


exports.updateStudent = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, age, dob } = req.body;
    try {
        const result = await pool.query(queries.updateStudent, [name, age, dob, id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Student not found');
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}


exports.deleteStudent = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const result = await pool.query(queries.deleteStudent, [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Student not found');
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}