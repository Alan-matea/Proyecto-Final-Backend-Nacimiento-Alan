// const controller = require('controller.js');
const express = requier('express');
const router = express();



router.get('/', (req, res) =>{
    res.send('');
});



var server = express();
server.user(express.json());
server.listen(4000);





// // GET Devuelve la cancion que el usuario pide.
// server.get("/:name", async(req, res) => {
//     try{
//         var cancion = controller.getSongByName(req.params.name);
//         res.status(200);
//         res.send(cancion);
//     } catch(e){
//         res.status(500);
//         res.send('Error al buscar las canciones');
//     }

//   });
  
  module.exports = router;