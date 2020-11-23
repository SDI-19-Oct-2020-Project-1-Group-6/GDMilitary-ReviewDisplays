CREATE TABLE Reviews (
    reviewID serial PRIMARY KEY,
    person_id integer,
    unit_id integer,
    reviewStars integer,
    pros varchar(500),
    cons varchar(500)    
);


INSERT INTO reviews (person_id, unit_id, reviewStars, pros, cons)
    VALUES (1, 23, 5,  'great food court', 'far from everything'),
           (12, 118, 3, 'classes are very nice', 'nothing to do so lots of idle time'),
           (3, 35, 2, 'instructors are accomodating', 'in the middle of nowhere');