import { poll } from "../db.js";

/* menssage for default */
const home = async (req, res) => {
  try {
    const [hello] = await poll.query(`SELECT "Hello World" AS hello `);
    res.send(hello[0]);
  } catch (err) {
    return res.status(500).json({ menssage: "Something goes wrong" });
  }
};

export default home;
