INSERT INTO department (name)
VALUES ("Information Technology"),
       ("Sales"),
       ("Finance"),
       ("Human Resources"),
       ("Legal");


INSERT INTO roles (title, salary, department_id)
VALUES ("IT Coordinator", 9, 1),
       ("IT Manager", 9, 1),
       ("Store Manager", 6, 3),
       ("Business Partner", 5, 3),
       ("Lawyer", 8, 5),
       ("Sales Associate", 5, 2),
       ("Sales Manager", 6, 2 ),
       ("Human Resource Director", 4, 4);
       
      
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mark", "Hommond", 2, NULL),
       ("Jake", "Ferrell", 1, 1),
       ("Georgia", "Ross", 3, NULL),
       ("Iwan", "Guzman", 5, NULL),
       ("Jorge", "Boyd", 6, 3);