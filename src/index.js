import app from "./app.js";
import { PORT } from "./config.js";

/* aplication runt in index */
app.listen(PORT, () => {
  console.log(
    `New app listening on the port ${PORT} \n=========================`
  );
});
