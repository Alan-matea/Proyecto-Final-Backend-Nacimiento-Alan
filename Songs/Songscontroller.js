
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

async function addSong(song){
  await songsmodel.postSong(song);
  
 }

//  function validarSong(song){
//  }

module.exports = {
  getSongsByName,
  addSong,
  getFindOneSong,
  findAllSongs

  };