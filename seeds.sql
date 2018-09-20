--Employer 1
INSERT INTO employers
(
    employer_name, 
    employer_email, 
    employer_password, 
    employer_confirmpassword
) VALUES 
(
    'Adam Jones',
    'adam@gmail.com',
    '123bacon',
    '123bacon'
);

--Employer 2
INSERT INTO employers
(
    employer_name, 
    employer_email, 
    employer_password, 
    employer_confirmpassword
) VALUES 
(
    'Hank Hill',
    'iheartpropane@gmail.com',
    'bluebird',
    'bluebird'
);

--Employer 1 Job 1
INSERT INTO add_gigs
(
    gig_date,
    gig_description,
    gig_location,
    gig_number_of_hours,
    gig_number_of_people,
    gig_rate,
    gig_total_pay,
    employer_id,
    employerEmployerId
) VALUES 
(
    '2018-09-23',
    'Mow the lawn',
    '123 Fake St. Los Angeles CA 90001',
    3,
    1,
    12,
    36,
    1,
    1
);

--Employer 1 Job 2
INSERT INTO add_gigs
(
    gig_date,
    gig_description,
    gig_location,
    gig_number_of_hours,
    gig_number_of_people,
    gig_rate,
    gig_total_pay,
    employer_id,
    employerEmployerId
) VALUES 
(
    '2018-09-26',
    'Bathroom Redesign',
    '456 Main St. Los Angeles CA 90001',
    30,
    2,
    12,
    360,
    1,
    1
);

--Employer 2 Job 1
INSERT INTO add_gigs
(
    gig_date,
    gig_description,
    gig_location,
    gig_number_of_hours,
    gig_number_of_people,
    gig_rate,
    gig_total_pay,
    employer_id,
    employerEmployerId
) VALUES 
(
    '2018-09-28',
    'Install Kitchen Sink',
    '789 First St. Los Angeles CA 90001',
    8,
    1,
    15,
    120,
    2,
    2
);

--Employer 2 Job 2
INSERT INTO add_gigs
(
    gig_date,
    gig_description,
    gig_location,
    gig_number_of_hours,
    gig_number_of_people,
    gig_rate,
    gig_total_pay,
    employer_id,
    employerEmployerId
) VALUES 
(
    '2018-09-30',
    'Paint The Fence',
    '13680 Third St. Los Angeles CA 90001',
    8,
    1,
    12,
    96,
    2,
    2
);

--Employee Data
-- INSERT INTO employees
-- (
--     employee_name, 
--     employee_phone
-- ) VALUES 
-- (
--     'Bobby Hill', 
--     3233630116
-- );

