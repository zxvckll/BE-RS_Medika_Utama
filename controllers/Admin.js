import Admin from "../models/Admin.js";
import User from "../models/User.js";
export const getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findAll({
      include: { all: true },
    });

    res.send(admin);
  } catch (err) {
    console.log(err);
  }
};

export const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(admin);
  } catch (err) {
    console.log(err);
  }
};

export const getAdminByUserId = async (req, res) => {
  try {
    const admin = await Admin.findOne({
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
    res.send(admin);
  } catch (err) {
    console.log(err);
  }
};

export const createAdmin = async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    res.send(admin);
    res.json({
      message: "Admin Created",
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateAdmin = async (req, res) => {
  try {
    await Admin.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Admin Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAdmin = async (req, res) => {
  try {
    await Admin.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Admin Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
