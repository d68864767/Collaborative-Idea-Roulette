```javascript
// config.js

module.exports = {
    openAIKey: 'your-openai-api-key',
    dbConfig: {
        host: 'localhost',
        user: 'your-database-user',
        password: 'your-database-password',
        database: 'your-database-name'
    },
    rouletteSettings: {
        numberOfPrompts: 2
    },
    teamSettings: {
        numberOfTeams: 4
    },
    brainstormingSettings: {
        timeLimit: 30 // in minutes
    },
    presentationSettings: {
        timePerTeam: 5 // in minutes
    },
    votingSettings: {
        votingTime: 10 // in minutes
    }
};
```
