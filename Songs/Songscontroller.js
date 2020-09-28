
const songsmodel = require ('./Songsmodel')

async function findAllSongs(){
  return await songsmodel.getAllSongs();
}

function getSongsByName(nombreCancion){
  if(nombreCancion != ''){
    return model.getSongsByName(nombreCancion);
  }
  }

  function getFindOneSong(nombreCamcion){
  if(nombreCancion != ''){
    return model.getSongsByName(nombreCancion);
  }
}

function addSongs(){
  validarsong(song);
  model.addSong(song);
 }

//  function validarSong(song){
//  }

module.exports = {
  getSongsByName,
  addSongs,
  getFindOneSong,
  findAllSongs

  };