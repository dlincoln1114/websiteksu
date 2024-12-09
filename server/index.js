const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: 'database-1.cb0qigyson8b.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'Coleman.25866001',
    database: 'blog',
    port: 3306,
    connectTimeout: 10000
  });
  
  // Connect to the database
  db.connect((error) => {
    if (error) {
      console.error('Database connection failed:', error.stack);
      return;
    }
    console.log('Connected to AWS RDS database');
  });
  

//Test route
app.get('/post', (req, res) => {
    const data = 'SELECT * from post';
    db.query(data, (error, results) => {
        if(error) {
            res.status(500).send('Error fetching posts.');
        } else {
            res.json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is runnng on port ${port}`)
})