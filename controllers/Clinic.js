

import Clinic from "../models/Clinic.js";


export const getClinic = async (req, res) => {
  try {
    const clinic = await Clinic.findAll({
      include: { all: true},
    });

    res.send(clinic);
  } catch (err) {
    console.log(err);
  }
};


export const getClinicById = async (req, res) => {
  try {
    const clinic = await Clinic.findOne({
      where: {
        id: req.params.id,
      },
  
    });
    res.send(clinic);
  } catch (err) {
    console.log(err);
  }
};


export const createClinic = async (req, res) => {
  try {
    const clinic = await Clinic.create(req.body);
    res.send(clinic);
    res.json({
      message: "Clinic Created",
    });
  } catch (err) {
    console.log(err);
  }
};




export const updateClinic = async (req, res) => {
  try {
    await Clinic.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Clinic Updated",
    });
  } catch (err) {
    console.log(err);
  }
};


export const deleteClinic = async (req, res) => {
  try {
    await Clinic.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Clinic Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
