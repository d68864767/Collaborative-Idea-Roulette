```javascript
// team.js

const config = require('./config');

// Function to divide participants into teams
const divideIntoTeams = (participants) => {
    const numberOfTeams = config.teamSettings.numberOfTeams;
    const teams = [];

    // Create empty teams
    for (let i = 0; i < numberOfTeams; i++) {
        teams.push([]);
    }

    // Distribute participants into teams
    for (let i = 0; i < participants.length; i++) {
        const teamIndex = i % numberOfTeams;
        teams[teamIndex].push(participants[i]);
    }

    return teams;
};

module.exports = {
    divideIntoTeams
};
```
