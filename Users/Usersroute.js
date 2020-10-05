const usersController = require("./Userscontroller");

async function getUsers(req, res) {
  try {
    var users = await usersController.findAllUsers();
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send("Hubo un error " + e);
  }
}

async function getUserByName(req, res) {
  try {
    var user = await usersController.getFindOneUser(req.params.name);
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send("Hubo un error " + e);
  }
}

async function postUser(req, res) {
  try {
    await usersController.addUser(req.body);
    res.status(200).send("el usuario se agrego correctamente.");
  } catch (e) {
    res.status(500);
  }
}

async function modUser(req, res) {
  try {
    var name = req.params.name;
    var userBody = req.body;
    await usersController.modUser(name, userBody);
    res.status(200).send("Se modifió un usuario");
  } catch (e) {
    res.status(500).send("Hubo un error " + e);
  }
}

async function delUser(req, res) {
  try {
    await usersController.delUser(req.params.name);
    res.status(200).send("Se eliminó una usuario");
  } catch (e) {
    res.status(500).send("Hubo un error " + e);
  }
}

async function postUserSong(req, res) {
  try {
    await usersController.addUserSong(req.params.username, req.body);
    res.status(200).send("Se agrego cancion a usuario");
  } catch (e) {
    res.status(500);
  }
}

async function delUserSong(req, res) {
  try {
    await usersController.delUserSong(req.params.username, req.params.namesong);
    res.status(200).send("Se eliminó una cancion de usuario");
  } catch (e) {
    res.status(500).send("Hubo un error " + e);
  }
}

module.exports = {
  getUsers,
  getUserByName,
  postUser,
  modUser,
  delUser,
  postUserSong,
  delUserSong
};
