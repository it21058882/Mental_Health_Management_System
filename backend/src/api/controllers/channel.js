

const doctor = require("../model/channel");



// const Register = async (req, res, next) => {

// }
/*
const addDoctor = async (req, res, next) => {
          console.log(req.body);

          const Doctor = req.body.name;

          const newDoctor = new doctor({
            name : Doctor
          });

          newDoctor.save().then((status)=>{
                    console.log(status._id);
                    res.send("record added " + status._id);
          }).catch((err)=>{
                    console.log(err);
          })

 }*/
 //create doctors
 export const createChannel = async (req, res) => {
  const channel = req.body;
  const newChannel = new doctor(channel);
  try {
      await newChannel.save();
      res.status(201).json(newChannel);
  } catch (error) {
      res.status(404).json({ message: error });
  }        
}
//read channel
export const getAllChannels = async (req, res) => {
  try {
      const channel = await channel.find();
      res.status(200).json(channel);
  } catch (error) {
      res.status(404).json({ message: error });
  }
}
//read channel by ID
export const getChannelbuUID= async (req, res) => {
  const id = req.params.id;
  try {
      const channel = await channel.findById(id);
      res.status(200).json(channel);
  } catch (error) {
      res.status(404).json({ message: error });
  }
}
//update channel
export const updateChannel = async (req, res) => {
  const id = req.params.id;
  const update = req.body;
  try {
      await doctor.findByIdAndUpdate(id, update);
      res.status(200).send({status: "Doctor updated Succsessfully"});
  } catch (error) {
      res.status(404).json({ message: error });
  }
}
//delete doctors
export const deleteChannel = async (req, res) => {
  const id = req.params.id;
  try {
      await doctor.findByIdAndDelete(id);
      res.status(200).send({status: "Doctor deleted Succsessfully"});
  }catch{
      res.status(404).json({ message: error });
  }
}


