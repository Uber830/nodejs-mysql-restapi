import { Router } from "express";
import home from "../controllers/index.controllers.js";

const route = Router();

route.get("/home", home);

export default route;
