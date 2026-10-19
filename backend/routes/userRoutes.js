import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
} from "../controllers/userController.js";
import { requireSignin } from "../controllers/authController.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", requireSignin, getUserById);
router.post("/", createUser);
router.put("/:id", requireSignin, updateUser);
router.delete("/:id", requireSignin, deleteUser);
router.delete("/", deleteAllUsers);

export default router;
