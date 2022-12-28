SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;

SELECT roles.id AS id, 
roles.title AS title, 
roles.salary AS salary, 
department.name AS department
FROM roles
JOIN department ON roles.department_id = department.id;

SELECT e.id AS id, e.first_name AS first_name, e.last_name AS last_name, 
roles.title AS title, department.name AS department, roles.salary AS salary, 
m.first_name AS manager
FROM employee e
JOIN roles ON e.role_id = roles.id
JOIN department ON roles.department_id = department.id
LEFT JOIN employee m ON m.id = e.manager_id;
