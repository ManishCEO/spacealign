const express = require('express');
const mysql = require('mysql2');
const session = require('express-session');
const bodyParser = require('body-parser');
//onst mysql = require('mysql2/promise');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true })); // Important for form fields
//const PORT = 7000;
const PORT = 7000;




// Serve static files from the "public" directory


// MySQL connection setup
const db = mysql.createConnection({
  host: 'dpg-d1julr7diees73cisnq0-a',      // change if needed
  user: 'root',  // your MySQL username
  password: 'aGS0eM2qXDt3KgYK6G9piTkO9GwI0jB0', // your MySQL password
  database: 'space_data',// your database name
  port: '3306',
  multipleStatements: true
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL');
});


// Setup session middleware
app.use(
  session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
  })
);




// Serve static files from the "public" directory
//const publicpath=path.join(__dirname, 'public')
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');


// Serve static frontend page from root path

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/login', (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).send('Username is required.');
  }

  // domains
  const allowedDomains = ['keysight.com', 'non.keysight.com'];

  // Create regex pattern to match any allowed domain
  const domainPattern = allowedDomains
    .map(d => d.replace(/\./g, '\\.')) // escape dots for regex
    .join('|');

  const emailRegex = new RegExp(`^[a-zA-Z0-9._%+-]+@(${domainPattern})$`, 'i');

  if (!emailRegex.test(username)) {
    return res.redirect('/?error=' + encodeURIComponent(`Email is not match our domain`));
  }

  req.session.username = username;

  // Check if user is registered in empinfo
  db.query(
    'SELECT emailID FROM empinfo WHERE emailID = ?',
    [username],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Database error.');
      }

      if (results.length > 0) {
        // User is registered
        return res.redirect('/user');
      } else {
        // User not registered
        return res.redirect('/add');
      }
    }
  );
});



function isAuthenticatedAndRegistered(req, res, next) {
  if (!req.session.username) {
    return res.redirect('/');
  }

  const username = req.session.username;

  db.query(
    'SELECT emailID FROM empinfo WHERE emailID = ?',
    [username],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Database error.');
      }

      if (results.length > 0) {
        next();
      } else {
        res.redirect('/add');
      }
    }
  );
}


app.get('/user', isAuthenticatedAndRegistered, (req, res) => {
  const emailID = req.session.username;

  db.query(
    `SELECT fullName, departmentName, reportingManager AS designation, 
            worksationNumber AS seatNumber, siteName AS workplace,adminName AS admin
     FROM empinfo 
     WHERE emailID = ?`,
    [emailID],
    (err, results) => {
      if (err) {
        console.error('DB Error:', err);
        return res.status(500).send('Internal server error.');
      }

      if (results.length === 0) {
        return res.status(404).send('User not found.');
      }

      const user = results[0];
      res.render('userpage', user); // Pass user data to EJS template
    }
  );
});





// Only logged-in users can access this
app.get('/add', (req, res) => {
  if (!req.session.username) {
    return res.redirect('/');
  }

  // If already registered, redirect to user page
  db.query(
    'SELECT emailID FROM empinfo WHERE emailID = ?',
    [req.session.username],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Database error.');
      }

      if (results.length > 0) {
        // Already registered → redirect to user
        return res.redirect('/user');
      } else {
        // Not registered → allow access to registration page
        res.sendFile(path.join(__dirname, 'public', 'AddEmp1.html'));
      }
    }
  );
});


// Logout route (optional)
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.send('Error logging out.');
    res.redirect('/');
  });
});



// Backend API route to get data from MySQL
app.get('/api/status', (req, res) => {
  const sql = `
    SELECT COUNT(*) AS total FROM spaceplan;
    SELECT COUNT(*) AS visitor FROM spaceplan WHERE status = 'visitorvillage';
    SELECT COUNT(*) AS occupied FROM spaceplan WHERE status = 'occupied';
    SELECT COUNT(*) AS vacant FROM spaceplan WHERE status = 'vacant';
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


const dbConfig = {
  host: 'dpg-d1julr7diees73cisnq0-a',
  user: 'root',
  password: 'aGS0eM2qXDt3KgYK6G9piTkO9GwI0jB0', // Change if you use a password
  database: 'space_data'
};


//addemp.html 
app.get('/fetch-and-insert', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'AddEmp1.html'));
});


app.post('/fetch-and-insert', async (req, res) => {
  console.log('Received body:', req.body);
  const { fullname, Imanager, email, gender, empstd, site, dept, admin, select } = req.body;

  if (!select) {
    return res.status(400).json({ error: "Missing 'selectedValue'" });
  }
  function safeParam(value) {
    return value === undefined ? null : value;
  }

  let conn;
  try {
    conn = await mysql.createConnection(dbConfig).promise();;
    await conn.beginTransaction();

    const [existingRows] = await conn.execute(
      'SELECT emailID FROM empinfo WHERE emailID = ?',
      [email]
    );
    if (existingRows.length > 0) {
      await conn.rollback();
      return res.redirect('/fetch-and-insert?error=' + encodeURIComponent('❌ Email already registered.'));
    }


    const [[seat]] = await conn.execute(
      `SELECT seatnumber FROM spaceplan WHERE branch = ? AND status = 'vacant' LIMIT 1`,
      [select]
    );

    if (!seat) {
      await conn.rollback();
      return res.redirect('/fetch-and-insert?error=' + encodeURIComponent('❌ No vacant seat found for the selected branch.'));
    }

    const seatnumber = seat.seatnumber;

    await conn.execute(
      `UPDATE spaceplan SET status = 'occupied' WHERE seatnumber = ?`,
      [seatnumber]
    );

    const [[row]] = await conn.execute(
      `SELECT mucode,floorname FROM spaceplan WHERE seatnumber = ?`,
      [seatnumber]
    );

    const mucode = row.mucode;
    const floor = row.floorname;
    const now = new Date();

    console.log({
      site, floor, seatnumber, fullname, gender, empstd, email, admin, mucode, Imanager, select, dept, now
    });


    await conn.execute(

      `INSERT INTO empinfo(siteName,floorID,worksationNumber,fullName,gender,empStd,emailID,adminName,muCode,reportingManager,branch,departmentName,recordUpdate) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        safeParam(site),
        safeParam(floor),
        safeParam(seatnumber),
        safeParam(fullname),
        safeParam(gender),
        safeParam(empstd),
        safeParam(email),
        safeParam(admin),
        safeParam(mucode),
        safeParam(Imanager),
        safeParam(select),
        safeParam(dept),
        now
      ]



    );

    await conn.commit();
    res.redirect('/fetch-and-insert?message=' + encodeURIComponent(`✅ Seat ${seatnumber} assigned.`));
  } catch (err) {
    if (conn) await conn.rollback();
    console.error('Error in /fetch-and-insert:', err);
    res.redirect('/fetch-and-insert?error=' + encodeURIComponent('❌ Error assigning seat.'));
  } finally {
    if (conn) await conn.end();
  }
});




app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


