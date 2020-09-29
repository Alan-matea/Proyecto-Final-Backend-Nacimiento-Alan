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

module.exports = {
  getSongs,
  postSong,
  getSongByName,
};
