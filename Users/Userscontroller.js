const { model } = require("mongoose");

function getUsersByName(nombreUsuario){
  if(nombreUsuario != ''){
    return model.getUsersByName(nombreUsuario);
  }

  }

  function getFindOneUser(nombreUsuario)
  if(nombreUsuario != ''){
    return model.getUsersByName(nombreUsuario);
  }
}

function addUsers(){
  validarsong(song);
  model.addSong(song);
 }

//  function validarSong(song){
//  }

module.exports = {
  getUsersByName,
  addUsers,
  getFindOneUser,
  };