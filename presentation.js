```javascript
// presentation.js

const config = require('./config');
const team = require('./team');

// Function to facilitate the presentation of each team's ideas
const facilitatePresentation = (teams, callback) => {
    // Iterate over each team
    for (let i = 0; i < teams.length; i++) {
        const currentTeam = teams[i];

        console.log(`\nTeam ${i + 1} is now presenting their ideas.`);

        // Iterate over each participant in the team
        for (let j = 0; j < currentTeam.length; j++) {
            const participant = currentTeam[j];

            // Simulate the presentation of the participant's idea
            console.log(`Participant ${participant.name} is presenting their idea.`);

            // Set a timer for the presentation
            setTimeout(() => {
                console.log(`Participant ${participant.name}'s presentation has ended.`);
            }, config.presentationSettings.presentationDuration);
        }
    }

    // Callback to signal the end of all presentations
    setTimeout(() => {
        console.log("\nAll presentations have ended.");
        callback(null);
    }, teams.length * config.presentationSettings.presentationDuration);
};

module.exports = {
    facilitatePresentation
};
```
