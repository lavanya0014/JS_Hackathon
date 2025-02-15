class Agent {
    constructor(name) {
      this.name = name;
    }
  
    act() {
      console.log(`${this.name} is acting.`);
    }
  }
  
  module.exports = { Agent }; // Export the class