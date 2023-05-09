import Doctor from "../models/Doctor.js";
import Clinic from "../models/Clinic.js";
import Polyclinic from "../models/Polyclinic.js";
import Schedule from "../models/Schedule.js";
import User from "../models/User.js"

export const getDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findAll({
      include: [{ all: true }, { model: Clinic, include: [Polyclinic]} ,{model: Schedule}],
    });

    res.send(doctor);
  } catch (err) {
    console.log(err);
  }
};

export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(doctor);
  } catch (err) {
    console.log(err);
  }
};

export const getDoctorByUserId = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({
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
    res.send(doctor);

  } catch (err) {
    console.log(err);
  }
};
export const getDoctorByClinic = async (req, res) => {
  try {
    const doctor = await Doctor.findAll({
      include: [   { model: Clinic, include: [Polyclinic]} ,{model: Schedule}],
      where: {
        ClinicId: req.params.id,
      },
    });
    res.send(doctor);
  } catch (err) {
    console.log(err);
  }
};

export const createDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.send(doctor);
    res.json({
      message: "Doctor Created",
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateDoctor = async (req, res) => {
  try {
    await Doctor.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Doctor Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteDoctor = async (req, res) => {
  try {
    await Doctor.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Doctor Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
