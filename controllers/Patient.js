

import Patient from "../models/Patient.js";
import User from "../models/User.js"

export const getPatient = async (req, res) => {
  try {
    const patient = await Patient.findAll({
      include: { all: true},
    });

    res.send(patient);
  } catch (err) {
    console.log(err);
  }
};


export const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(patient);
  } catch (err) {
    console.log(err);
  }
};

export const getPatientByUserId = async (req, res) => {
  try {

    const patient = await Patient.findOne({
      include: [
        { 
          model: User,
          attributes: ['email'] // Include the email attribute in the User model
        }
      ],
      where: {
        UserId: req.params.id,
      },
    });
    res.send(patient);
  } catch (err) {
    console.log(err);
  }
};


export const createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.send(patient);
    res.json({
      message: "Patient Created",
    });
  } catch (err) {
    console.log(err);
  }
};




export const updatePatient = async (req, res) => {
  try {
    await Patient.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Patient Updated",
    });
  } catch (err) {
    console.log(err);
  }
};


export const deletePatient = async (req, res) => {
  try {
    await Patient.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Patient Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
