```javascript
// voting.js

const config = require('./config');

// Function to conduct a voting session
const conductVoting = (teams, callback) => {
    // Iterate over each team
    for (let i = 0; i < teams.length; i++) {
        const currentTeam = teams[i];

        console.log(`\nVoting for Team ${i + 1}'s ideas is now open.`);

        // Simulate the voting process
        console.log(`Participants are now voting for Team ${i + 1}'s ideas.`);

        // Set a timer for the voting
        setTimeout(() => {
            console.log(`Voting for Team ${i + 1}'s ideas has ended.`);
        }, config.votingSettings.votingTime);
    }

    // Callback to signal the end of all voting
    setTimeout(() => {
        console.log("\nAll voting has ended.");
        callback(null);
    }, teams.length * config.votingSettings.votingTime);
};

module.exports = {
    conductVoting
};
```
