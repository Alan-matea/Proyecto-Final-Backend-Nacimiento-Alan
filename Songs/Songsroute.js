const controller = require('Songscontroller.js');
const express = requier('express');
const router = express();


router.get('/', (req, res) => {
    res.send('');
});


async function getSongs (req,res) {
  try
  {
      var songs = await songsController.findAllSongs();
      res.status(200).send(songs);
  }
  catch(e){
      res.status(500).send('Hubo un error ' + e);
  }
}


async function getSongByName (req,res) { 
  try
  { 
    var songs = await songsController.findOneSong(req.params.name)
    res.status(200).send(songs);
  }

  catch(e){
    res.status(500).send('Hubo un error ' + e);
  }
}


async function postSong(req,res){ 
  try
  { 

  }

  catch(e){
    res.status(500)

  }
}


  module.exports = {
    router, 
  }
