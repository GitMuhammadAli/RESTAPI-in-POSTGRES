const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'mydatabase',
    port: 5432,
}, (error, res) => {
    if (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
});


module.exports = pool
