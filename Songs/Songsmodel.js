const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SongsSchema = new Schema({
  name: String,
  artist: String,
  duration: String,
  album: String,
});

const Song = mongoose.model("Song", SongsSchema);

async function getAllSongs() {
  console.log("entra a get all songs");
  return await Song.find({});
}

async function postSong(body) {
  const newSong = new Song(body);
  await newSong.save();
  console.log("la cancion se agregó");
}

async function getSongsByName(nombreDeCancion){
  return await Song.find({name:nombreDeCancion});
}

async function modSong(name, songBody){
  var uptSong = await Song.findOneAndUpdate({name: name}, songBody);
  console.log(uptSong);
  uptSong.save();
}

async function delSong(name){
  await Song.findOneAndDelete({name: name});
}

module.exports = {
  getAllSongs,
  postSong,
  getSongsByName,
  modSong,
  delSong
};
