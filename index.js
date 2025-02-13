const express = require('express');
const { initAgents } = require('./src/agents/agents');
const { initDecisionMaking } = require('./src/decision-making/decisionMaking');
const { initInteraction } = require('./src/interaction/interaction');
const { initLearning } = require('./src/learning/learning');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Initialize Core Modules
initAgents();
initDecisionMaking();
initInteraction();
initLearning();

// Basic API Endpoint
app.get('/', (req, res) => {
    res.send('AI Agent Framework is Running!');
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
