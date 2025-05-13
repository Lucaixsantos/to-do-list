import { Router } from "express";
import TaskController from "../controller/TaskController.js";
const routes = Router();

routes.get("home", TaskController.getAll);

export default routes;
