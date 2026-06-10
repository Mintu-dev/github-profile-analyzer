const db = require("../config/db");

const saveProfile = (profileData) => {
  const query = `
    INSERT INTO github_profiles
    (
      username,
      name,
      bio,
      public_repos,
      followers,
      following,
      account_created_at,
      top_language,
      profile_score
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      name = VALUES(name),
      bio = VALUES(bio),
      public_repos = VALUES(public_repos),
      followers = VALUES(followers),
      following = VALUES(following),
      top_language = VALUES(top_language),
      profile_score = VALUES(profile_score)
  `;

  return new Promise((resolve, reject) => {
    db.query(query, profileData, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

const getAllProfiles = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM github_profiles", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const getProfileByUsername = (username) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM github_profiles WHERE username = ?",
      [username],
      (err, results) => {
        if (err) reject(err);
        else resolve(results);
      },
    );
  });
};
const getTopProfiles = () => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM github_profiles ORDER BY profile_score DESC",
      (err, results) => {
        if (err) reject(err);
        else resolve(results);
      },
    );
  });
};
const searchProfiles = (keyword) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM github_profiles WHERE username LIKE ?",
      [`%${keyword}%`],
      (err, results) => {
        if (err) reject(err);
        else resolve(results);
      },
    );
  });
};

module.exports = {
  saveProfile,
  getAllProfiles,
  getProfileByUsername,
  getTopProfiles,
  searchProfiles,
};
