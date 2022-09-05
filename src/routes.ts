import express from "express";
import UserController from "./controllers/UserController";

const router = express.Router();


// Routes - User
router.post("/user/", UserController.create);
router.get("/user/", UserController.findAll);
router.get("/user/:userID", UserController.findOne);
router.put("/user/:userID", UserController.update)
router.delete("/user/:userID", UserController.destroy);

export { router };