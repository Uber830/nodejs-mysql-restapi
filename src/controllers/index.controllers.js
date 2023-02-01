import { poll } from "../db.js";

const home = async (req, res) => {
  const [goodmorning] = await poll.query(
    `select "Hello World" as goodmorning `
  );
  res.json(goodmorning[0]);
};

export default home;
