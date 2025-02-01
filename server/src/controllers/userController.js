const userService = require("../services/userService");

const getClients = async (req, res) => {
  try {
    const clients = await userService.getAllClients();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: "Error in getting clients" });
  }
};

const addClient = async (req, res) => {
  try {
    const data = req.body;
    await userService.createClient(data);
    res.status(200).json({ message: "Successfully added" });
  } catch (error) {
    res.status(500).json({ message: "Error in adding client" });
  }
};

const updateClient = async (req, res) => {
  try {
    const data = req.body;
    await userService.updateClient(data);
    res.status(200).json({ message: "Successfully updated" });
  } catch (error) {
    res.status(500).json({ message: "Error in updating client" });
  }
};

const deleteClient = async (req, res) => {
  try {
    const id = req.headers["id"];
    await userService.deleteClient(id);
    res.status(200).json({ message: "Successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error in deleting client" });
  }
};

module.exports = { getClients, addClient, deleteClient, updateClient };
