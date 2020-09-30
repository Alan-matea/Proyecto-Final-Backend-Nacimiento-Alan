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
    var users = await usersController.findOneuser(req.params.name);
    res.status(200).send(users);
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

module.exports = {
  getUsers,
  getUserByName,
  postUser,
  modUser,
  delUser
};
