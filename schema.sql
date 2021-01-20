CREATE DATABASE pressure_calendar;
USE pressure_calendar;

CREATE TABLE users (
	id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);


CREATE TABLE users_data (
id INT PRIMARY KEY AUTO_INCREMENT,
user_name VARCHAR(100) DEFAULT '-',
user_surname VARCHAR(100)  DEFAULT '-',
user_age INT DEFAULT 0,
user_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE addresses (
	id INT PRIMARY KEY AUTO_INCREMENT,
    district VARCHAR(100) DEFAULT '-',
    street VARCHAR(100) DEFAULT '-',
    city VARCHAR(100) DEFAULT '-',
    postal_code VARCHAR(10) DEFAULT '-',
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE medical_data (
	id INT PRIMARY KEY AUTO_INCREMENT,
    systolic_pressure INT NOT NULL,
    diastolic_pressure INT NOT NULL,
    pulse INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    user_id INT NOT NULL,
    FOREIGN KEY (users_id) REFERENCES users(id)
);


