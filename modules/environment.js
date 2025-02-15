class Environment {
    constructor() {
      this.agents = [];
    }
  
    addAgent(agent) {
      this.agents.push(agent);
    }
  
    simulate() {
      this.agents.forEach((agent) => agent.act());
    }
  }
  
  module.exports = { Environment }; // Export the class