```javascript
// database.js

const mysql = require('mysql');
const config = require('./config');

// Create a connection to the database
const connection = mysql.createConnection(config.dbConfig);

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }

    console.log('Connected to the database with id ' + connection.threadId);
});

// Function to get prompts from the database
const getPrompts = (callback) => {
    const query = 'SELECT * FROM prompts ORDER BY RAND() LIMIT ?';
    connection.query(query, [config.rouletteSettings.numberOfPrompts], (err, results) => {
        if (err) {
            console.error('Error fetching prompts from the database: ' + err.stack);
            return callback(err);
        }

        callback(null, results);
    });
};

module.exports = {
    getPrompts
};
```
