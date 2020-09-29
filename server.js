const express = require("express");
const mongoose = require("mongoose");

// importando rutas
const songsRoute = require("./Songs/Songsroute");
const usersRoute = require("./Users/Usersroute");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Alan-matea:Matea2020@prueba-db.vrgps.mongodb.net/Mateify?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(4000);
//Songs
app.get("/songs", songsRoute.getSongs);
app.get("/songs/:name", songsRoute.getSongByName);
app.post("/songs/", songsRoute.postSong);

//Users
app.get("/users/", usersRoute.getUsers);
app.post("/users/", usersRoute.postUser);
