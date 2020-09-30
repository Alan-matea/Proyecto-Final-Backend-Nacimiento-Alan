const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: String,
  lastName: String,
  age: Number,
  mail: String,
  likeSongs: [{ type: Schema.ObjectId, ref: "Song" }],
});

const User = mongoose.model("User", UsersSchema);

async function getAllUsers() {
  console.log("entra a get all Users");
  return await User.find({}).populate("likeSongs Song");
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


module.exports = {
  getAllUsers,
  postUser,
  modUser,
  delUser
};
