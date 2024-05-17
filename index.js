const express = require('express');
const pool = require('./db');
const app = express();

const studentRoutes = require("./students/routes")

app.use(express.json());
app.use("/students", studentRoutes);
const port = 7000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Server is running on port ${port}`));