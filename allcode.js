// Agent Class
class Agent {
    constructor(name) {
      this.name = name;
    }
  
    act() {
      console.log(`${this.name} is acting.`);
    }
  }
  
  // Environment Class
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
  
  // QLearningAgent Class
  class QLearningAgent extends Agent {
    constructor(name) {
      super(name);
      this.qTable = {};
    }
  
    learn(state, action, reward) {
      const key = `${state}-${action}`;
      const oldValue = this.qTable[key] || 0;
      this.qTable[key] = oldValue + reward;
    }
  }
  
  // Main Script
  const env = new Environment();
  
  const agent1 = new Agent('Agent 1');
  const qAgent = new QLearningAgent('Q-Agent');
  
  env.addAgent(agent1);
  env.addAgent(qAgent);
  
  console.log('Simulating environment...');
  env.simulate();
  
  console.log('\nTraining Q-Agent...');
  qAgent.learn('state1', 'action1', 10);
  console.log('Q-Table:', qAgent.qTable); // View the Q-Table