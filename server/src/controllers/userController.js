const userService = require("../services/userService");

const getClients = async (req, res) => {
  try {
    const clients = await userService.getAllClients();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getClients };
