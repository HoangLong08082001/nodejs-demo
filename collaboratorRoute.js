import express from "express";
import collaboratorController from "../controllers/collaboratorController";
const router = express.Router();
export default function collaboratorRoute(app) {
  router.get("/all", collaboratorController.getAll);
  return app.use("/collaborator", router);
}
