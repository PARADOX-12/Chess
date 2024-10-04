const express = require("express");
const socket = require("socket.io");
const http = require("http");
const { Chess } = require("chess.js");
const path = require("path");
require('dotenv').config()

const app = express();

const server = http.createServer(app);
const io = socket(server);

const chess = new Chess();
let players = {};
let currentPlayer = "w";


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.render("index", {title: "Chess Game" });
});

io.on("connection", (uniqueSocket) => {
    
    if(!players.white) {
        players.white = uniqueSocket.id
        uniqueSocket.emit("playerRole", "w");
    }
    else if(!players.black){
        players.black = uniqueSocket.id;
        uniqueSocket.emit("playerRole", "b");
    }
    else{
        uniqueSocket.emit("spectatorRole");
    }

    uniqueSocket.on("disconnect", ()=> {
        if(uniqueSocket.id === players.white) {
            delete players.white;
        }
        else if(uniqueSocket.id === players.black){
            delete players.black
        }
    });

    uniqueSocket.on("move", (move)=> {
    try {
        if(chess.turn()==="w" && uniqueSocket.id !== players.white) return;
        if(chess.turn()==="b" && uniqueSocket.id !== players.black) return;

        const result = chess.move(move);

        if(result){
            currentPlayer = chess.turn();
            io.emit("move", move);
            io.emit("boardState", chess.fen());
        }
        else{
            uniqueSocket.emit("invalidMove", move);
        }
        }
    catch(err){
        uniqueSocket.emit("invalid move: ", move)
    }
        
    })
});


server.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port", process.env.PORT || 3000);
  });