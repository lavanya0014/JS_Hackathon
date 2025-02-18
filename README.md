## Title: JavaScript Hackathon – AI Agent Framework

### **Project Overview**
We developed an **AI Agent Framework in JavaScript**, enabling developers to build intelligent agents with modular components for **decision-making and interaction**.

#### **Key Features:**
- **Modular Architecture:** Pre-built modules for decision-making algorithms.
- **Reinforcement Learning:** Implements **Q-learning** for adaptive decision-making.
- **Multi-Agent Systems:** Supports collaboration and competition via **Socket.io**.

### **Team Roles:**
**Arpit Saini (Framework Architecture & Core Modules):**
- Designed framework structure and core modules.
- Integrated multi-agent communication with **Socket.io**.

**Prashant Gautam (Reinforcement Learning):**
- Implemented **Q-Learning** for agent decision-making.
- Developed agent learning modules using **JavaScript** and **Node.js**.

**Lavanya Singh (Multi-Agent Systems):**
- Built multi-agent interaction protocols via **Socket.io**.
- Helped Arpit Saini in his Framework Architecture & Core Modules work
- Helped in debugging and writing code

### **Technologies & Tools:**
- **JavaScript, Node.js** for backend logic.
- **Socket.io** for multi-agent communication.

#### **Q-Learning Highlights:**
- **Q-Table:** Stores state-action values.
- **Learning Formula:** Q(s,a) = Q(s,a) + α[r + γmaxQ(s’,a’) − Q(s,a)]

### **Setup Instructions:**
1. **Install Node.js:** [Node.js Download](https://nodejs.org/)
2. **Clone Repository:**
    ```bash
    git clone https://github.com/your-username/ai-agent-framework.git
    cd ai-agent-framework
    ```
3. **Install Dependencies:**
    ```bash
    npm init -y
    npm install
    ```
4. **Run Simulation:**
    ```bash
    node agent.js
    ```

### **Challenges & Solutions:**
- **Q-Learning Understanding:** Overcame confusion through examples and experimentation.
- **Class Inheritance Issues:** Resolved by revisiting JavaScript OOP concepts.

### **Future Improvements:**
- Add **epsilon-greedy** exploration strategy.
- Introduce **persistent storage** for Q-tables.
- API integration and LLM
