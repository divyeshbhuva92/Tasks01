// DB for movies
// 1. Movie should have multiple media(Video or Image)
// 2. Movie can belongs to multiple Genre
// 3. Movie can have multiple reviews and Review can belongs to a user
// 4. Artist can have multiple skills
// 5. Artist can perform multiple role in a single film

CREATE TABLE movies (
    id INTEGER PRIMARY KEY,
    Name TEXT,
    Poster TEXT,
    Video TEXT,
    Genre TEXT
);
CREATE TABLE media (
    Movie_id INTEGER FOREIGN KEY,
    Poster TEXT,
    Video TEXT,
);

CREATE TABLE reviews (
    Movie_id INTEGER FOREIGN KEY,
    Username TEXT,
    User_review TEXT
);

CREATE TABLE Artist (
    Artist_id INTEGER PRIMARY KEY,
    Artist_name TEXT,
    Movie_id INTEGER FOREIGN KEY,
);
CREATE TABLE Artist_details (
    Artist_id INTEGER FOREIGN KEY,
    Skills TEXT,
    Role TEXT,
);

