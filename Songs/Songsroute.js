const songsController = require("./Songscontroller");

async function getSongs(req, res) {
  try {
    var songs = await songsController.findAllSongs();
    res.status(200).send(songs);
  } catch (e) {
    res.status(500).send("Hubo un error " + e);
  }
}

async function getSongByName(req, res) {
  try {
    var songs = await songsController.getFindOneSong(req.params.name);
    res.status(200).send(songs);
  } catch (e) {
    res.status(500).send("Hubo un error " + e);
  }
}

async function postSong(req, res) {
  try {
    await songsController.addSong(req.body);
    res.status(200).send("la cancion se agrego correctamente.");
  } catch (e) {
    res.status(500);
  }
}

async function modSong(req, res) {
  try {
    var name = req.params.name;
    var songBody = req.body;
    await songsController.modSong(name, songBody);
    res.status(200).send("Se modifió una cancion");
  } catch (e) {
    res.status(500).send("Hubo un error " + e);
  }
}

async function delSong(req, res) {
  try {
    await songsController.delSong(req.params.name);
    res.status(200).send("Se eliminó una canción");
  } catch (e) {
    res.status(500).send("Hubo un error " + e);
  }
}

module.exports = {
  getSongs,
  postSong,
  getSongByName,
  modSong,
  delSong
};
