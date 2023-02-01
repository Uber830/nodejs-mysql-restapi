/* crea una db con ese nombre si no existe */
CREATE DATABASE IF NOT EXISTS companydb;
/* selecciona esa db */
USE companydb;
/* creacion una tabla */
CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);
/* ver informacion de la tabla */
DESCRIBE employee;
/* insertar valores */
INSERT INTO employee(name, salary)
VALUES('juan', 90000),
    ('ramon', 50000),
    ('uber', 40000),
    ('admin', 45000);
/* eliminar valores */
DELETE FROM employee
WHERE name = 'Juan'
    AND salary = 90000