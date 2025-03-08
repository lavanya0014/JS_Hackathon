## Title: JavaScript Hackathon – AI Agent Framework

This project simulates a simple environment with agents and a Q-learning agent. It demonstrates how agents can act in an environment and how a Q-learning agent can learn from its actions.

---

## **Project Structure**
The project consists of the following components:
1. **Agent Class**: Represents a basic agent that can act.
2. **Environment Class**: Manages multiple agents and simulates their actions.
3. **QLearningAgent Class**: Extends the `Agent` class to implement Q-learning functionality.
4. **Main Script**: Initializes the environment, adds agents, and runs the simulation.

---

## **Code Overview**

### **Agent Class**
- **Purpose**: Represents a basic agent with a name and an `act()` method.
- **Key Methods**:
  - `constructor(name)`: Initializes the agent with a name.
  - `act()`: Logs the agent's action to the console.

### **Environment Class**
- **Purpose**: Manages a collection of agents and simulates their actions.
- **Key Methods**:
  - `constructor()`: Initializes an empty list of agents.
  - `addAgent(agent)`: Adds an agent to the environment.
  - `simulate()`: Simulates actions for all agents in the environment.

### **QLearningAgent Class**
- **Purpose**: Extends the `Agent` class to implement Q-learning.
- **Key Methods**:
  - `constructor(name)`: Initializes the Q-learning agent with a name and an empty Q-table.
  - `learn(state, action, reward)`: Updates the Q-table based on the state, action, and reward.

### **Main Script**
- Initializes the environment and agents.
- Simulates the environment.
- Trains the Q-learning agent and logs the Q-table.

---

## **How to Run**
1. Ensure Node.js is installed on your system.
2. Clone the repository.
3. Run the following command in the terminal:
   ```bash
   node index.js
   ```
4. Check the console for output.

---

## **Team Task Allocation**

### **Team Member 1: Agent Class**
- Implement the `Agent` class.
- Ensure the `act()` method logs the agent's action correctly.
- Write unit tests for the `Agent` class.

### **Team Member 2: Environment Class**
- Implement the `Environment` class.
- Ensure the `addAgent()` and `simulate()` methods work as expected.
- Write unit tests for the `Environment` class.

### **Team Member 3: QLearningAgent Class**
- Implement the `QLearningAgent` class.
- Ensure the `learn()` method updates the Q-table correctly.
- Write unit tests for the `QLearningAgent` class.

---

## **Expected Output**
When you run the script, you should see the following output in the console:
```
Simulating environment...
Agent 1 is acting.
Q-Agent is acting.

Training Q-Agent...
Q-Table: { 'state1-action1': 10 }
```

---

## **Future Enhancements**
1. Add more states and actions to the Q-learning agent.
2. Implement a reward function for the environment.
3. Visualize the Q-table using a chart or graph.

---

## **Contributors**
- Arpit - Agent Class
- Lavanya - Environment Class
- Prashant  - QLearningAgent Class

---
