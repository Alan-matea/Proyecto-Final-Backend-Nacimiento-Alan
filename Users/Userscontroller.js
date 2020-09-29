const usersmodel = require("./Usersroute");

async function findAllUsers() {
  return await songsmodel.getAllUsers();
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
  await songsmodel.postUser(user);
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
