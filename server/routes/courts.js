import express from "express";
import multer from "multer";
import {
  addCourt,
  getCourt,
  addRemoveFav,
  checkInOnCourt,
  checkOutOnCourt,
  getCourtPlayers,
} from "../controllers/courts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
const upload = multer();

// ADD COURT
router.post("/", upload.none(), addCourt);

// GET COURT
router.get("/:id", getCourt);

// ADD/REMOVE FAVOURITE
router.patch("/:courtId/fav", upload.none(), verifyToken, addRemoveFav);

// CHECK-IN
router.post("/:courtId/checkin", upload.none(), verifyToken, checkInOnCourt);

// CHECK-OUT
router.post("/:courtId/checkout", upload.none(), verifyToken, checkOutOnCourt);

// GET PLAYERS LIST
router.get("/:courtId/players", getCourtPlayers);

export default router;
