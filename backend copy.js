const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const PORT = 7000;



// Serve static files from the "public" directory


// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',        // change if needed
    user: 'root',  // your MySQL username
    password: 'manish123@', // your MySQL password
    database: 'userdata',// your database name
    multipleStatements: true
});

db.connect(err => {
    if (err) {
        console.error('MySQL connection error:', err);
        process.exit(1);
    }
    console.log('Connected to MySQL');
});
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static frontend page from root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'))
   
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname,'AddEmp.html'))
    
   
});



// Backend API route to get data from MySQL
app.get('/api/status', (req, res) => {
    const sql = `
    SELECT COUNT(*) AS total FROM seatrecord;
    SELECT COUNT(*) AS visitor FROM seatrecord WHERE occupany = 'VisitorVillage';
    SELECT COUNT(*) AS occupied FROM seatrecord WHERE occupany = 'occupany';
    SELECT COUNT(*) AS vacant FROM seatrecord WHERE occupany = 'vacant';
  `;
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'No data found' });
        }
        res.json({
            total: results[0][0].total,
            visitor: results[1][0].visitor,
            occupied: results[2][0].occupied,
            vacant: results[3][0].vacant,
        });
    });

});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


