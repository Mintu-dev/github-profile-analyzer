CREATE DATABASE github_analyzer;

USE github_analyzer;

CREATE TABLE github_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE,
    name VARCHAR(255),
    bio TEXT,
    public_repos INT,
    followers INT,
    following INT,
    account_created_at DATETIME,
    top_language VARCHAR(100),
    profile_score INT,
    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);