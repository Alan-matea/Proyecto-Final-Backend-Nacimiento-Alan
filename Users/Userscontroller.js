const usersmodel = require("./Usersmodel");

async function findAllUsers() {
  return await usersmodel.getAllUsers();
}

function getUsersByName(nombreUsuario) {
  if (nombreUsuario != "") {
    return model.getUsersByName(nombreUsuario);
  }
}

function getFindOneUser(nombreUsuario) {
  if (nombreUsuario != "") {
    return model.getUsersByName(nombreUsuario);
  }
}

async function addUser(user) {
  await usersmodel.postUser(user);
}

async function modUser(name, userBody) {
  await usersmodel.modUser(name, userBody);
}

async function delUser(name) {
  return usersmodel.delUser(name); 
}





module.exports = {
  findAllUsers,
  getUsersByName,
  getFindOneUser,
  addUser,
  modUser,
  delUser
};

