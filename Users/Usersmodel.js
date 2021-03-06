const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: String,
  lastName: String,
  age: Number,
  mail: String,
  likedSongs: [{ type: Schema.ObjectId, ref: "Song" }],
});

const User = mongoose.model("User", UsersSchema);

async function getAllUsers() {
  console.log("entra a get all Users");
  return await User.find({}).populate("likedSongs Song");
}

async function getUser(nombreUsuario) {
  return await User.find({name: nombreUsuario}).populate("likedSongs Song");
}

async function postUser(body) {
  const newUser = new User(body);
  await newUser.save();
  console.log("el usuario se agregó");
}

async function modUser(name, userBody){
  var uptUser = await User.findOneAndUpdate({name: name}, userBody);
  console.log(uptUser);
  uptUser.save();
}

async function delUser(name){
  await User.findOneAndDelete({name: name});
}

async function postUserSong(nameuser, cancion) {
  const user = await User.find({name: nameuser});
  user[0].likedSongs.push(cancion);
  await user[0].save();
}

async function delUserSong(nameuser, cancionId) {
  const user = await User.find({name: nameuser});
  user[0].likedSongs.remove(cancionId);
  await user[0].save();
}

module.exports = {
  getAllUsers,
  getUser,
  postUser,
  modUser,
  delUser,
  postUserSong,
  delUserSong
}; 