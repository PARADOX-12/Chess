# **Online Chess Game**

This is a real-time multiplayer chess game built using **Node.js**, **Express.js**, **Socket.IO**, and **Chess.js**. Players can play as white or black, and spectators can watch the game unfold. The game enforces the rules of chess and ensures that only the correct player can move pieces during their turn.

## **Features**

- **Real-Time Multiplayer:** Two players can connect and play a game of chess in real-time.
- **Spectator Mode:** If more than two people connect, they will be assigned as spectators and can watch the game.
- **Drag and Drop Chess Interface:** Users can drag and drop pieces to make a move. The board reflects both valid and invalid moves.
- **Chess Rules Enforcement:** The game is built using `chess.js` to validate moves according to the rules of chess.
- **Automatic Turn Management:** Players can only move during their respective turns (white or black).

## **Technologies Used**

- **Node.js**: Backend framework for building the server.
- **Express.js**: Web framework for serving the front-end and managing routes.
- **Socket.IO**: Library for enabling real-time, bidirectional communication between web clients and servers.
- **Chess.js**: Library for implementing the chess rules and game state management.
- **EJS**: Templating engine used for rendering HTML pages dynamically.
- **HTML/CSS/JavaScript**: Front-end stack for building the user interface.

## **Installation**

### **Prerequisites**

Ensure that you have **Node.js** and **npm** (Node package manager) installed. You can download Node.js from [here](https://nodejs.org/).

### **Clone the Repository**

```bash
git clone https://github.com/your-username/chess-game.git
cd chess-game

Install Dependencies
Run the following command to install all the dependencies:

bash
Copy code
npm install
Running the Application

Start the application using the following command:
bash
Copy code
npm run start