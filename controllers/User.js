import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createPatient } from "../controllers/Patient.js";
import { createDoctor } from "../controllers/Doctor.js";
import { createAdmin } from "../controllers/Admin.js";

import Patient from "../models/Patient.js";
import Doctor from "../models/Doctor.js";
import Admin from "../models/Admin.js";



export const getAllUser = async (req, res) => {
  try {
    const user = await User.findAll({
      include: { all: true},
    });

    res.send(user);
  } catch (err) {
    console.log(err);
  }
};


export const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};


export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send(user);
    res.json({
      message: "User Created",
    });
  } catch (err) {
    console.log(err);
  }
};




export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "User Updated",
    });
  } catch (err) {
    console.log(err);
  }
};


export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "User Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findAll({
      attributes: ["id", "email"],
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
  const { email, password, role } = req.body;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    let user = await User.findOne({
      where: { email: email },
    });
    let id;

    if (user) {
      id = user.id;
    } else {
      user = await User.findOrCreate({
        where: { email: email, password: hashPassword },
      });
      id = user[0].id;
    }

    Object.defineProperty(req.body, "UserId", {
      value: id,
      enumerable: true,
      writable: true,
      configurable: true,
    });
    if (role == "Patient") {
      await createPatient(req, res);
    } else if (role == "Doctor") {
      await createDoctor(req, res);
    } else if (role == "Admin") {
      await createAdmin(req, res);
    }

    res.json({ msg: "Register Berhasil", user: user, body: req.body, id: id });
  } catch (error) {
    console.log(error);
  }
};
export const VerifyUser = async (userId, Role) => {
  // console.log(userId);
  // console.log(Role);

  let user;
  if (Role == "Patient") {
    user = await findUser(Patient);
  } else if (Role == "Doctor") {
    user = await findUser(Doctor);
  } else if (Role == "Admin") {
    user = await findUser(Admin);
  } else {
    return null;
  }
  // console.log(user);

  return user;

  async function findUser(Role) {
    try {
      const user = await Role.findAll({
        where: {
          UserId: userId,
        },
      });
      // console.log(user[0]);
      if (!user) {
        res.status(404).send("user NOT FOUND");
      }
      return user[0];
    } catch (e) {
      res.status(404).json({ msg: "Akun tidak ditemukan", err: error });
    }
  }
};
export const Login = async (req, res) => {
  try {
    const userRole = req.body.role;
    const user = await User.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: "Wrong Password" });
    const userId = user[0].id;
    const email = user[0].email;
    // console.log(userId);

    const isVerified = await VerifyUser(userId, userRole);
    console.log(isVerified);
    if (!isVerified)
      return res.status(400).json({ msg: "akun tidak ditemukan" });

    const accessToken = jwt.sign(
      { userId, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    const refreshToken = jwt.sign(
      { userId, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    await User.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    ); //REFRESH NOT ACCESSTOKEN FOR COOKIES
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken, refreshToken, userId,userRole });
  } catch (error) {
    res.status(404).json({ msg: "Email tidak ditemukan", err: error });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await User.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await User.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};
