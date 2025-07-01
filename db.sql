CREATE DATABASE IF NOT EXISTS crypto_guide;
USE crypto_guide;

CREATE TABLE leads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(50),
  exchange VARCHAR(50),
  portfolio VARCHAR(50),
  interest VARCHAR(255),
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
