BEGIN;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    PASSWORD VARCHAR(255) NOT NULL
 );


COMMIT;
