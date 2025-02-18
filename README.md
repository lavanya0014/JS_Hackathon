# JS_Hackathon
## Title: JavaScript Hackathon – AI Agent Framework

### **Project Overview**
We developed an **AI Agent Framework in JavaScript**, enabling developers to build intelligent agents for chatbots, virtual assistants, game AI, and more. The framework offers modular components for **decision-making, learning, and interaction**.

#### **Key Features:**
- **Modular Architecture:** Pre-built modules for decision-making and learning algorithms.
- **Reinforcement Learning:** Implements **Q-learning** for adaptive decision-making.
- **LLM Integration:** Seamless API integration for natural language processing.
- **Multi-Agent Systems:** Supports collaboration and competition via **Socket.io**.
- **Simulated Environments:** Built-in tools for agent behavior testing.

### **Team Roles:**
**Arpit Saini (Framework Architecture & Core Modules) – Structure Leader:**
- Designed framework structure and core modules.
- Integrated multi-agent communication with **Socket.io**.

**Prashant Gautam (Reinforcement Learning) – Learning Expert:**
- Implemented **Q-Learning** for agent decision-making.
- Developed agent learning modules using **JavaScript** and **Node.js**.

**Lavanya Singh (LLM Integration & Multi-Agent Systems) – Communication Expert:**
- Integrated agents with **LLMs** for chatbot functionalities.
- Built multi-agent interaction protocols via **Socket.io**.

### **Technologies & Tools:**
- **JavaScript, Node.js** for backend logic.
- **Socket.io** for multi-agent communication.
- **OpenAI API** for LLM integration.

#### **Q-Learning Highlights:**
- **Q-Table:** Stores state-action values.
- **Learning Formula:** Q(s,a) = Q(s,a) + α[r + γmaxQ(s’,a’) − Q(s,a)]
- Applied Q-learning for **decision-making, simulation, and multi-agent adaptation**.

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
- Visualize agent performance with charts.

