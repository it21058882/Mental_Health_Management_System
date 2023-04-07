
const Client = require("../model/client");
//read doctors
export const getAllClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}
//read doctors by ID
export const getClient = async (req, res) => {
    const id = req.params.id;
    try {
        const client = await Client.findById(id);
        res.status(200).json(client);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}
 //create doctors
export const createClient = async (req, res) => {
    const client = req.body;
    const newClient = new Client(client);
    try {
        await newClient.save();
        res.status(201).json(newClient);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const updateClient = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    try {
        await Client.findByIdAndUpdate(id, update);
        res.status(200).send({ status: "Client details updated" });
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const deleteClient = async (req, res) => {
    const id = req.params.id;
    try {
        await Client.findByIdAndDelete(id);
        res.status(200).send({ status: "Client details deleted" });
    } catch {
        res.status(404).json({ message: error });
    }
}
/*
export const loginClient = async (req, res) => {
    const { email, password } = req.body;

    try {

        const client = await Client.findOne({ email });

        if (!client) {
            return res.status(404).json({ message: "Client doesn't exist" });
        }
        if (password != client.password) {
            return res.status(404).json({ message: "invalid credentials" });
        }
        // if(client){
        //     req.session.user=user;
        //     req.session.authorized=true;

        return res.status(200).json(client);

    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getClientInfo = async (req, res) => {
    const email = req.params.email;
    try {
        const client = await Client.findOne({ email });
        if (!client) {
            return res.status(404).json({ message: "Client doesn't exist" });
        }
        res.status(200).json(client);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}*/