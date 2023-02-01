import { poll } from "../db.js";

const getEmployees = async (req, res) => {
  try {
    const [employee] = await poll.query(`SELECT * FROM employee`);
    res.status(202).json(employee);
  } catch (err) {
    return res.status(500).json({ menssage: "Something goes wrong" });
  }
};

const getEmployeeId = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await poll.query(`SELECT * FROM employee WHERE id = (?)`, [
      Number(id),
    ]);

    rows.length <= 0
      ? res.status(404).json({ message: "Employee not found" })
      : res.status(202).json(rows[0]);
  } catch (err) {
    return res.status(500).json({ menssage: "Something goes wrong" });
  }
};

const createteEmployees = async (req, res) => {
  const { name, salary } = req.body;
  try {
    const [rows] = await poll.query(
      `INSERT INTO employee (name, salary) VALUES (?,?)`,
      [name, salary]
    );

    res.status(202).json({ id: rows.insertId, name, salary });
  } catch (err) {
    return res.status(500).json({ menssage: "Something goes wrong" });
  }
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  try {
    /* update value */
    const [result] = await poll.query(
      `UPDATE employee SET name= IFNULL(?, name), salary= IFNULL(?, salary) WHERE id= ? `,
      [name, salary, Number(id)]
    );

    /* affected rows */
    if (result.affectedRows === 0)
      res.status(404).json({ menssage: "employee not found" });

    /* result of query insert */
    const [rows] = await poll.query(`SELECT * FROM employee WHERE id= ?`, [
      Number(id),
    ]);

    res.json(rows[0]);
  } catch (err) {
    return res.status(500).json({ menssage: "Something goes wrong " });
  }
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await poll.query(`DELETE FROM employee WHERE id = (?)`, [
      Number(id),
    ]);

    result.affectedRows !== 0
      ? res.sendStatus(204)
      : res.status(404).json({ menssage: "Employee not found" });
  } catch (err) {
    return res.status(500).json({ menssage: "Something goes wrong" });
  }
};

export {
  getEmployees,
  getEmployeeId,
  createteEmployees,
  updateEmployee,
  deleteEmployee,
};
