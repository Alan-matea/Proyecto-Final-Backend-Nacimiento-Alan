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
    var users = await usersController.findOneSong(req.params.name);
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

module.exports = {
  getUsers,
  getUserByName,
  postUser,
};
