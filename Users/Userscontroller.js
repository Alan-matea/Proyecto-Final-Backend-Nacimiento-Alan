const usersmodel = require("./Usersmodel");

async function findAllUsers() {
  return await usersmodel.getAllUsers();
}

async function getFindOneUser(nombreUsuario) {
  return await usersmodel.getUser(nombreUsuario);
}

async function addUser(user) {
  await usersmodel.postUser(user);
}

async function modUser(name, userBody) {
  await usersmodel.modUser(name, userBody);
}

async function delUser(name) {
  return await usersmodel.delUser(name); 
}

module.exports = {
  findAllUsers,
  getFindOneUser,
  addUser,
  modUser,
  delUser
};

