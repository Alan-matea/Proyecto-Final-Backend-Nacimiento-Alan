const songsmodel = require("./Songsmodel");

async function findAllSongs() {
  return await songsmodel.getAllSongs();
}

async function getFindOneSong(nombreCancion) {
  if (nombreCancion != "") {
    return songsmodel.getSongsByName(nombreCancion);
  }
}

async function addSong(song) {
  await songsmodel.postSong(song);
}

async function modSong(name, songBody) {
  await songsmodel.modSong(name, songBody);
}

async function delSong(name) {
  return songsmodel.delSong(name); 
}

//  function validarSong(song){
//  }

module.exports = {
  addSong,
  getFindOneSong,
  findAllSongs,
  modSong,
  delSong
};
