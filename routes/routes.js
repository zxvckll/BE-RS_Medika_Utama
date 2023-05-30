// Import express
import express from "express";




import { getUser, Register, Login, Logout } from "../controllers/User.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import {antiCors} from "../middleware/AntiCors.js"
import { refreshToken } from "../controllers/RefreshToken.js";



// import {
//   getUser,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
// } from "../controllers/User.js";

import {
  getAppointment,
  getAppointmentById,
  getAppointmentByPatientId,
  getAppointmentByDoctorId,
  createAppointment,
  updateAppointment,
  getAppointmentByUser,
  deleteAppointment,
} from "../controllers/Appointment.js";

import {
  getDoctor,
  getDoctorById,
  getDoctorByUserId,
  createDoctor,
  updateDoctor,
  getDoctorByClinic,
  deleteDoctor,
} from "../controllers/Doctor.js";

import {
  getPatient,
  getPatientById,
  getPatientByUserId,
  createPatient,
  updatePatient,
  deletePatient,
} from "../controllers/Patient.js";

import {
  getDay,
  getDayById,
  createDay,
  updateDay,
  deleteDay,
} from "../controllers/Day.js";


import {
  getSchedule,
  getScheduleById,
  createSchedule,
  getScheduleByDoctor,
  updateSchedule,
  deleteSchedule,
} from "../controllers/Schedule.js";


import {
  getPolyclinic,
  getPolyclinicById,
  createPolyclinic,
  updatePolyclinic,
  deletePolyclinic,
} from "../controllers/Polyclinic.js";

import {
  getStatus,
  getStatusById,
  createStatus,
  updateStatus,
  deleteStatus,
} from "../controllers/Status.js";

import {
  getClinic,
  getClinicById,
  createClinic,
  updateClinic,
  deleteClinic,
} from "../controllers/Clinic.js";

import {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/User.js";

import {
  getAdmin,
  getAdminById,
  getAdminByUserId,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} from "../controllers/Admin.js";




// Init express router
const router = express.Router();

router.get('/user', verifyToken, getUser);
router.post('/user', Register);
router.post('/login',antiCors, Login);
// router.get('/token', refreshToken);
router.delete('/logout', Logout);
// router.post('/tes', tes);



router.get("/appointment",verifyToken, getAppointment);
router.get("/appointment/:id", verifyToken, getAppointmentById);
router.get("/appointment/patient/:id", verifyToken, getAppointmentByPatientId);
router.get("/appointment/doctor/:id", verifyToken, getAppointmentByDoctorId);
router.get("/user/appointment", verifyToken, getAppointmentByUser);
router.post("/appointment", verifyToken, createAppointment);
router.put("/appointment/:id", verifyToken, updateAppointment);
router.delete("/appointment/:id", verifyToken, deleteAppointment);


router.get("/patient",verifyToken, getPatient);
router.get("/patient/:id", verifyToken, getPatientById);
router.get("/patient/user/:id", verifyToken, getPatientByUserId);
router.post("/patient", createPatient);
router.put("/patient/:id", verifyToken, updatePatient);
router.delete("/patient/:id", verifyToken, deletePatient);

router.get("/doctor",verifyToken, getDoctor);
router.get("/doctor/:id", verifyToken, getDoctorById);
router.get("/doctor/user/:id", verifyToken, getDoctorByUserId);
router.get("/doctor/clinic/:id", getDoctorByClinic);
router.post("/doctor", verifyToken, createDoctor);
router.put("/doctor/:id", verifyToken, updateDoctor);
router.delete("/doctor/:id", verifyToken, deleteDoctor);


router.get("/schedule", getSchedule);
router.get("/schedule/:id", getScheduleById);
router.get("/schedule/doctor/:id", getScheduleByDoctor);
router.post("/schedule", verifyToken, createSchedule);
router.put("/schedule/:id", verifyToken, updateSchedule);
router.delete("/schedule/:id", verifyToken, deleteSchedule);


router.get("/day", getDay);
router.get("/day/:id", verifyToken, getDayById);
router.post("/day", verifyToken, createDay);
router.put("/day/:id", verifyToken, updateDay);
router.delete("/day/:id", verifyToken, deleteDay);

router.get("/polyclinic", getPolyclinic);
router.get("/polyclinic/:id", verifyToken, getPolyclinicById);
router.post("/polyclinic", verifyToken, createPolyclinic);
router.put("/polyclinic/:id", verifyToken, updatePolyclinic);
router.delete("/polyclinic/:id", verifyToken, deletePolyclinic);

router.get("/status", getStatus);
router.get("/status/:id", verifyToken, getStatusById);
router.post("/status", verifyToken, createStatus);
router.put("/status/:id", verifyToken, updateStatus);
router.delete("/status/:id", verifyToken, deleteStatus);

router.get("/clinic", getClinic);
router.get("/clinic/:id", verifyToken, getClinicById);
router.post("/clinic", verifyToken, createClinic);
router.put("/clinic/:id", verifyToken, updateClinic);
router.delete("/clinic/:id", verifyToken, deleteClinic);

router.get("/user",verifyToken, getUser);
router.get("/user/:id", verifyToken, getUserById);
router.post("/user", verifyToken, createUser);
router.put("/user/:id", verifyToken, updateUser);
router.delete("/user/:id", verifyToken, deleteUser);

router.get("/admin",verifyToken, getAdmin);
router.get("/admin/:id", verifyToken, getAdminById);
router.get("/admin/user/:id", verifyToken, getAdminByUserId);
router.post("/admin", verifyToken, createAdmin);
router.put("/admin/:id", verifyToken, updateAdmin);
router.delete("/admin/:id", verifyToken, deleteAdmin);




// export router
export default router;
