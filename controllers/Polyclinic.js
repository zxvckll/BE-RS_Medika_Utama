

import Polyclinic from "../models/Polyclinic.js";


export const getPolyclinic = async (req, res) => {
  try {
    const polyclinic = await Polyclinic.findAll({
      include: { all: true},
    });

    res.send(polyclinic);
  } catch (err) {
    console.log(err);
  }
};


export const getPolyclinicById = async (req, res) => {
  try {
    const polyclinic = await Polyclinic.findOne({
      where: {
        id: req.params.id,
      },
      include: { all: true},
    });
    res.send(polyclinic);
  } catch (err) {
    console.log(err);
  }
};


export const createPolyclinic = async (req, res) => {
  try {
    const polyclinic = await Polyclinic.create(req.body);
    res.send(polyclinic);
    res.json({
      message: "Polyclinic Created",
    });
  } catch (err) {
    console.log(err);
  }
};




export const updatePolyclinic = async (req, res) => {
  try {
    await Polyclinic.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Polyclinic Updated",
    });
  } catch (err) {
    console.log(err);
  }
};


export const deletePolyclinic = async (req, res) => {
  try {
    await Polyclinic.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Polyclinic Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
