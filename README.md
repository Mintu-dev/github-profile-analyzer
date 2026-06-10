# GitHub Profile Analyzer API

## Overview

GitHub Profile Analyzer is a Node.js and Express.js backend application that fetches GitHub user data, analyzes profile statistics, stores results in MySQL, and provides APIs to retrieve and rank analyzed profiles.

## Features

* Analyze GitHub profiles using GitHub API
* Store analyzed profiles in MySQL
* Calculate Top Programming Language
* Calculate Profile Score
* Get all analyzed profiles
* Get profile by username
* Search profiles by username
* View top-ranked profiles

## Tech Stack

* Node.js
* Express.js
* MySQL
* Axios
* GitHub REST API
* dotenv

## Project Structure

github-profile-analyzer/

├── config/

├── controllers/

├── routes/

├── services/

├── models/

├── database/

├── app.js

├── .env

├── package.json

└── README.md

## Installation

Clone the repository:

git clone <repository-url>

cd github-profile-analyzer

Install dependencies:

npm install

## Environment Variables

Create a .env file:

PORT=5000

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=your_password

DB_NAME=github_analyzer

## Run Application

npm run dev

## Database Setup

Create database:

CREATE DATABASE github_analyzer;

Run schema.sql file to create required tables.

## API Endpoints

### Analyze GitHub Profile

GET /api/github/analyze/:username

Example:

/api/github/analyze/Mintu-dev

### Get All Profiles

GET /api/github/profiles

### Get Single Profile

GET /api/github/profiles/:username

Example:

/api/github/profiles/Mintu-dev

### Get Top Profiles

GET /api/github/top-profiles

### Search Profiles

GET /api/github/search/:username

Example:

/api/github/search/min

## Profile Score Formula

Profile Score =
(public_repos × 2) +
(followers × 3) +
following

## Future Improvements

* Swagger Documentation
* Authentication
* Pagination
* Caching
* Deployment Monitoring

## Author

Mintu Kumar
