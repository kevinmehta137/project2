USE gig_finderdb;

CREATE TABLE employer_signup
(
    employer_id int NOT NULL AUTO_INCREMENT,
    employer_name VARCHAR(255) NOT NULL,
    employer_email VARCHAR(255) NOT NULL,
    employer_password VARCHAR(255) NOT NULL,
    employer_confirmpassword VARCHAR(255) NOT NULL,
    PRIMARY KEY (employer_id)
);

CREATE TABLE add_gigs
(
    id int NOT NULL AUTO_INCREMENT,
    gig_date DATE NOT NULL,
    gig_description VARCHAR(255) NOT NULL,
    gig_location VARCHAR(255) NOT NULL,
    gig_number_of_hours int NOT NULL,
    gig_number_of_people int NOT NULL,
    gig_rate int NOT NULL,
    gig_total_pay int NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employees 
(
    employees_id int NOT NULL AUTO_INCREMENT,
    employee_name VARCHAR(255) NOT NULL,
    employee_phone BIGINT NOT NULL,
    PRIMARY KEY (employees_id)
);
