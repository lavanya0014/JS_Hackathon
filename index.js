const { Agent } = require('./modules/agent');
const { Environment } = require('./modules/environment');
const { QLearningAgent } = require('./modules/q-learning');

// Create an environment
const env = new Environment();

// Create agents
const agent1 = new Agent('Agent 1');
const qAgent = new QLearningAgent('Q-Agent');

// Add agents to the environment
env.addAgent(agent1);
env.addAgent(qAgent);

// Simulate the environment
console.log('Simulating environment...');
env.simulate();

// Train the Q-Agent
console.log('\nTraining Q-Agent...');
qAgent.learn('state1', 'action1', 10);
console.log('Q-Table:', qAgent.qTable); // View the Q-Table