CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    userId INTEGER,
    login VARCHAR(50) NOT NULL, 
    company VARCHAR(100), 
    bio VARCHAR(200),
    followers INTEGER,
    avatar_url VARCHAR(100)
);

