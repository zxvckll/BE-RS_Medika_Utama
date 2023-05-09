import Appointment from "../models/Appointment.js";
import Patient from "../models/Patient.js";
import Doctor from "../models/Doctor.js";
import Admin from "../models/Admin.js";
import Day from "../models/Day.js";
import Schedule from "../models/Schedule.js";
import Clinic from "../models/Clinic.js";
import Polyclinic from "../models/Polyclinic.js";

export const getAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findAll({
      include: [
        { all: true },
        { model: Schedule, include: [Day] },
        { model: Clinic, include: [Polyclinic] },
      ],
    });

    res.send(appointment);
  } catch (err) {
    console.log(err);
  }
};

export const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        { all: true },
        { model: Schedule, include: [Day] },
        { model: Clinic, include: [Polyclinic] },
      ],
    });
    res.send(appointment);
    // res.send("asdsad");
  } catch (err) {
    console.log(err);
  }
};
export const getAppointmentByPatientId = async (req, res) => {
  try {
    const appointment = await Appointment.findAll({
      where: {
        "$Patient.UserId$": req.params.id,
      },
      include: [
        {
          model: Patient,
          where: {
            UserId: req.params.id,
          },
        },
        { all: true },
        { model: Schedule, include: [Day] },
        { model: Clinic, include: [Polyclinic] },
      ],
    });

    res.send(appointment);
    // res.send("asdsad");
  } catch (err) {
    console.log(err);
  }
};
export const getAppointmentByDoctorId = async (req, res) => {
  try {
    const appointment = await Appointment.findAll({
      where: {
        "$Doctor.UserId$": req.params.id,
      },
      include: [
        {
          model: Doctor,
          where: {
            UserId: req.params.id,
          },
        },
        { all: true },
        { model: Schedule, include: [Day] },
        { model: Clinic, include: [Polyclinic] },
      ],
    });
    res.send(appointment);
    // res.send("asdsad");
  } catch (err) {
    console.log(err);
  }
};

export const getAppointmentByUser = async (req, res) => {
  try {
    const role = req.query.role;
    const id = req.query.id;

    let appointment = null;
    if (!role) {
      res.status(404).send("role NOT FOUND");
    }
    if (role == "Patient") {
      const user = await findUser(Patient);
      appointment = await Appointment.findAll({
        where: {
          PatientId: user.id,
        },
        include: { all: true },
      });
    } else if (role == "Doctor") {
      const user = await findUser(Doctor);
      appointment = await Appointment.findAll({
        where: {
          DoctorId: user.id,
        },
        include: { all: true },
      });
    } else if (role == "Admin") {
      const user = await findUser(Admin);

      appointment = await Appointment.findAll({
        include: { all: true },
      });
    }
    async function findUser(role) {
      const user = await role.findOne({
        where: {
          UserId: id,
        },
      });
      if (!user) {
        res.status(404).send("user Doctor NOT FOUND");
      }
      return user;
    }

    res.send(appointment);
    // res.send("asdsad");
  } catch (err) {
    console.log(err);
  }
};

export const createAppointment = async (req, res) => {
  try {
    Object.keys(req.body).forEach(function (key, index) {
      if (req.body[key] == "") {
        req.body[key] = null;
      }
    });

    const appointment = await Appointment.create(req.body);
    res.send(appointment);
    res.json({
      message: "Appointment Created",
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateAppointment = async (req, res) => {
  try {
    Object.keys(req.body).forEach(function (key, index) {
      if (req.body[key] == "") {
        req.body[key] = null;
      }
    });

    await Appointment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Appointment Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    await Appointment.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Appointment Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
