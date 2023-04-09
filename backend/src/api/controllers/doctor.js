

const doctor = require("../model/doctor");



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
 export const addDoctor = async (req, res) => {
  const doctors = req.body;
  const newDoctors = new doctor(doctors);
  try {
      await newDoctors.save();
      res.status(201).json(newDoctors);
  } catch (error) {
      res.status(404).json({ message: error });
  }        
}
//read doctors
export const getAllDoctors = async (req, res) => {
  try {
      const doctors = await doctor.find();
      res.status(200).json(doctors);
  } catch (error) {
      res.status(404).json({ message: error });
  }
}
//read doctors by ID
export const getDoctors = async (req, res) => {
  const id = req.params.id;
  try {
      const doctors = await doctor.findById(id);
      res.status(200).json(doctors);
  } catch (error) {
      res.status(404).json({ message: error });
  }
}
//update doctors
export const updateDoctors = async (req, res) => {
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
export const deleteDoctors = async (req, res) => {
  const id = req.params.id;
  try {
      await doctor.findByIdAndDelete(id);
      res.status(200).send({status: "Doctor deleted Succsessfully"});
  }catch{
      res.status(404).json({ message: error });
  }
}


