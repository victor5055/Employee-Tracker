SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;

SELECT roles.id AS id, 
roles.title AS title, 
roles.salary AS salary, 
department.name AS department
FROM roles
JOIN department ON roles.department_id = department.id;

SELECT employee.id AS id, employee.first_name AS first_name, employee.last_name AS last_name, 
roles.title AS title, department.name AS department, roles.salary AS salary, 
manager.first_name AS manager
FROM employee e
JOIN roles ON employee.role_id = roles.id
JOIN department ON roles.department_id = department.id
LEFT JOIN employee manager ON manager.id = employee.manager_id;
