import Schedule from "../models/Schedule.js";
import Day from "../models/Day.js";

export const getSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findAll({
      include: { all: true },
    });

    res.send(schedule);
  } catch (err) {
    console.log(err);
  }
};

export const getScheduleById = async (req, res) => {
  try {
    const schedule = await Schedule.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(schedule);
  } catch (err) {
    console.log(err);
  }
};

export const getScheduleByDoctor = async (req, res) => {
  try {
    const schedule = await Schedule.findAll({
      where: {
        DoctorId: req.params.id,
      },
      include: [{ model: Day }],
    });
    res.send(schedule);
  } catch (err) {
    console.log(err);
  }
};

export const createSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.create(req.body);
    res.send(schedule);
    res.json({
      message: "Schedule Created",
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateSchedule = async (req, res) => {
  try {
    await Schedule.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Schedule Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteSchedule = async (req, res) => {
  try {
    await Schedule.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Schedule Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
