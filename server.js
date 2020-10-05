const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')

// importando rutas
const songsRoute = require("./Songs/Songsroute");
const usersRoute = require("./Users/Usersroute");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Alan-matea:Matea2020@prueba-db.vrgps.mongodb.net/Mateify?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

app.listen(process.env.PORT);

//Songs
app.get("/songs", songsRoute.getSongs);
app.get("/songs/:name", songsRoute.getSongByName);
app.post("/songs", songsRoute.postSong);
app.put("/songs/:name", songsRoute.modSong);
app.delete("/songs/:name", songsRoute.delSong);

//Users
app.get("/users", usersRoute.getUsers);
app.get("/users/:name", usersRoute.getUserByName);
app.post("/users", usersRoute.postUser);
app.put("/users/:name", usersRoute.modUser);
app.delete("/users/:name", usersRoute.delUser);
