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

module.exports = {
  findAllUsers,
  getUsersByName,
  getFindOneUser,
  addUser,
};

// function getUsersByName(nombreUsuario){
//   if(nombreUsuario != ''){
//     return model.getUsersByName(nombreUsuario);
//   }

//   }

//   function getFindOneUser(nombreUsuario)
//   if(nombreUsuario != ''){
//     return model.getUsersByName(nombreUsuario);
//   }
// }

// function addUsers(){
//   validarsong(song);
//   model.addSong(song);
//  }

//  function validarSong(song){
//  }
