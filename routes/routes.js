// Import express
import express from "express";
import { getCPUUtilization } from "../controllers/CPU.js";
import { getDiskWriteOps,getDiskReadOps,getDiskReadBytes,getDiskWriteBytes } from "../controllers/Disk.js";
import { getNetworkIn,getNetworkOut,getNetworkPacketsOut,getNetworkPacketsIn } from "../controllers/Network.js";

const router = express.Router();


//CPU
router.get("/getCPUUtilization", getCPUUtilization);
//Disk
router.get("/getDiskWriteOps", getDiskWriteOps);
router.get("/getDiskReadOps", getDiskReadOps);
router.get("/getDiskReadBytes", getDiskReadBytes);
router.get("/getDiskWriteBytes", getDiskWriteBytes);
//Network
router.get("/getNetworkIn", getNetworkIn);
router.get("/getNetworkOut", getNetworkOut);
router.get("/getNetworkPacketsOut", getNetworkPacketsOut);
router.get("/getNetworkPacketsIn", getNetworkPacketsIn);






// export router
export default router;
