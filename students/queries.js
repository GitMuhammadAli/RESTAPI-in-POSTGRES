const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1";
const insertStudent = "INSERT INTO students (name, age, dob) VALUES ($1, $2, $3) RETURNING *";
const updateStudent = "UPDATE students SET name = $1, age = $2, dob = $3 WHERE id = $4 RETURNING *";
const deleteStudent = "DELETE FROM students WHERE id = $1 RETURNING *";

module.exports = {
    getStudents,
    getStudentById,
    insertStudent,
    updateStudent,
    deleteStudent,
};
