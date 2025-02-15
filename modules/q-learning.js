const { Agent } = require('./agent'); // Import the Agent class

class QLearningAgent extends Agent {
  constructor(name) {
    super(name);
    this.qTable = new Map();
  }

  learn(state, action, reward) {
    const key = `${state}-${action}`;
    const oldValue = this.qTable.get(key) || 0;
    this.qTable.set(key, oldValue + reward);
  }
}

module.exports = { QLearningAgent }; // Export the class