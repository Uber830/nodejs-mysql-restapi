import { Router } from "express";
import {
  getEmployees,
  getEmployeeId,
  createteEmployees,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employees.controllers.js";

const route = Router();

route.get("/employees", getEmployees);

route.get("/employee/:id", getEmployeeId);

route.post("/employees/create", createteEmployees);

route.patch("/employee/:id", updateEmployee); /* method applies partial modifications to recurse */

route.delete("/employee/:id", deleteEmployee);

export default route;
