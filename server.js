const express = require('express');
const mongoose = require('mongoose');

// importando rutas
const Songsroute = require ('./Songs/Songsroute.js');
const Usersroute = require ('./Users/Usersroute.js');

const app = express();
app.use(express.json());
app.listen(process.env.PORT);

mongoose.connect(
  "mongodb+srv://Alan-matea:Matea2020@prueba-db.vrgps.mongodb.net/Mateify?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }

  .then(db => console.log('Db connected'))
  .catch(err => console.log(err))
);

//Songs
app.get('/songs/', songsRoute.getSongs)
app.get('/songs/:name', songsRoute.getSongByName)
app.post('/songs/', songsRoute.postSong)

//Users
app.get('/users/', userRoute.getUsers)
app.post('/users/', userRoute.postUser)

app.listen(4000, () => {
    console.log('Servidor andando en puerto 4000');

});