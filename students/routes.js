const router = require('express').Router();
const students = require('./controller');

router.get("/", (req, res) => {
    res.send("hello from api students")

})

router.get("/get", students.getStudents);
router.get("/:id", students.getStudentsbyid);
router.post("/create", students.createStudent);
router.put("/:id", students.updateStudent);
router.delete("/:id", students.deleteStudent);
module.exports = router 