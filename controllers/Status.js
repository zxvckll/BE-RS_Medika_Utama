Status

import Status from "../models/Status.js";


export const getStatus = async (req, res) => {
  try {
    const status = await Status.findAll({
      include: { all: true},
    });

    res.send(status);
  } catch (err) {
    console.log(err);
  }
};


export const getStatusById = async (req, res) => {
  try {
    const status = await Status.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(status);
  } catch (err) {
    console.log(err);
  }
};


export const createStatus = async (req, res) => {
  try {
    const status = await Status.create(req.body);
    res.send(status);
    res.json({
      message: "Status Created",
    });
  } catch (err) {
    console.log(err);
  }
};




export const updateStatus = async (req, res) => {
  try {
    await Status.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Status Updated",
    });
  } catch (err) {
    console.log(err);
  }
};


export const deleteStatus = async (req, res) => {
  try {
    await Status.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Status Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
