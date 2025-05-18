import { Router } from "express";
import TaskController from "../controller/TaskController.js";
const routes = Router();

routes.get("/", TaskController.getAllTasks);
routes.post("/create", TaskController.createTask);

export default routes;
