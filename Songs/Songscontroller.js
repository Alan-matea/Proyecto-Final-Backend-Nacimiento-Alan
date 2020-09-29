const songsmodel = require("./Songsmodel");

async function findAllSongs() {
  return await songsmodel.getAllSongs();
}

function getFindOneSong(nombreCancion) {
  if (nombreCancion != "") {
    return songsmodel.getSongsByName(nombreCancion);
  }
}

async function addSong(song) {
  await songsmodel.postSong(song);
}

//  function validarSong(song){
//  }

module.exports = {
  addSong,
  getFindOneSong,
  findAllSongs,
};
