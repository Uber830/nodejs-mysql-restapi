import "dotenv/config";
import express from "express";
import employeeRoutes from "./routes/employes.routes.js";
import indexRoutes from "./routes/index.routes.js";
import morgan from "morgan";

const app = express();

/* setting */

/*middleware  */
app.use(morgan("dev"));
app.use(express.json());

/* routes */
app.use(indexRoutes);
app.use("/api", employeeRoutes);

/* route for default */
app.use((req, res, next) => {
  res.status(404).json({
    menssage: "Endpoint not found",
  });
});

export default app;