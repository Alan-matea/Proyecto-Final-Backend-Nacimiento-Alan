const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: String,
  lastName: String,
  age: Number,
  mail: String,
  likeSongs: Object,
});
const User = mongoose.model("User", UsersSchema);

async function getAllUsers() {
  console.log("entra a get all Users");
  return await User.find({});
}

async function postUser(body) {
  const newUser = new User(body);
  await newUser.save();
  console.log("el usuario se modifico");
}

module.exports = {
  getAllUsers,
  postUser,
};
