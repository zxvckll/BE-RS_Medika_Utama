

import Day from "../models/Day.js";


export const getDay = async (req, res) => {
  try {
    const say = await Day.findAll({
      include: { all: true},
    });

    res.send(say);
  } catch (err) {
    console.log(err);
  }
};


export const getDayById = async (req, res) => {
  try {
    const say = await Day.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(say);
  } catch (err) {
    console.log(err);
  }
};


export const createDay = async (req, res) => {
  try {
    const say = await Day.create(req.body);
    res.send(say);
    res.json({
      message: "Day Created",
    });
  } catch (err) {
    console.log(err);
  }
};




export const updateDay = async (req, res) => {
  try {
    await Day.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Day Updated",
    });
  } catch (err) {
    console.log(err);
  }
};


export const deleteDay = async (req, res) => {
  try {
    await Day.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Day Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
