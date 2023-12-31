```javascript
// roulette.js

const database = require('./database');

// Function to generate random prompts
const generatePrompts = (callback) => {
    database.getPrompts((err, prompts) => {
        if (err) {
            console.error('Error generating prompts: ' + err.stack);
            return callback(err);
        }

        // Check if enough prompts were fetched
        if (prompts.length < 2) {
            console.error('Not enough prompts fetched from the database');
            return callback(new Error('Not enough prompts fetched from the database'));
        }

        // Select two random prompts
        const prompt1 = prompts[0];
        const prompt2 = prompts[1];

        // Combine the prompts
        const combinedPrompt = `${prompt1.prompt} and ${prompt2.prompt}`;

        callback(null, combinedPrompt);
    });
};

module.exports = {
    generatePrompts
};
```
