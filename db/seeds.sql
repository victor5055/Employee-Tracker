
INSERT INTO department(name)
VALUES  ("Sales"),
        ("Marketing and Advertising"),
        ("Human Resouces"),
        ("Information Technology");


INSERT INTO roles (title, salary, department_id)
VALUES  ("Sales Associate", 5, 2),
        ("Assistant Sales Manager", 6 2),
        ("Store Manager", 6, 3),
        ("General Marketing", 8, 5),
        ("Business Partner", 5, 3),
        ("Human Resource Director", 8, 5),
        ("System Adminstrator", 9, 1),
        ("IT Coordinator", 9, 1),
        ("IT Manager", 6, 1);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Mark", "Hammond", 2, null),
        ("Jake", "Ferrell", 1,1),
        ("Georgia", "Ross", 3, null),
        ("Iwan", "Guzman", 5, null),
        ("Robyn", "Reyes", 6, 3),
        ("Jorge", "Boyd", 1, 3);