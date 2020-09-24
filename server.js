const express = require("exprss");
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  "mongodb+srv://Alan-matea:Matea2020@prueba-db.vrgps.mongodb.net/Mateify?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }


  .then(db => console.log('Db connected'))
  .catch(err => console.log(err))
);

// importando rutas

const Songsrouter = require(',/routes/Songsrouter')


//rutes


//Songs

app.get('/songs'), (req, res) => {

app.get(('/song/:name'),(req, res) => {
//     try{
//         var cancion = controller.getSongByName(req.params.name);
//         res.status(200);
//         res.send(cancion);
//     } catch(e){
//         res.status(500);
//         res.send('Error al buscar las canciones');
//     }

//   });

app.post('/song'), (req, res) => {
//     var cancion = req.body;
//     console.log(cancion);
//     canciones.push(cancion);
//     res.status(201);
//     res.send('Se agrego la cancion correctamente.');
// })

app.delete('/song/:name'), (req, res) => {


//Users

app.get('/users')

app.get('/users/:name')

app.post('/user')

app.delete('/users/:name')


// esto esta iniciando el servidor
app.listen(4000, () => {
    console.log('Server on port 4000');

});











