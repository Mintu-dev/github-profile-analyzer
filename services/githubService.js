const axios = require("axios");

const fetchGithubProfile = async (username) => {
  try {
    const userResponse = await axios.get(
      `https://api.github.com/users/${username}`,
    );

    const repoResponse = await axios.get(
      `https://api.github.com/users/${username}/repos`,
    );

    return {
      user: userResponse.data,
      repos: repoResponse.data,
    };
  } catch (error) {
    throw new Error("GitHub user not found");
  }
};

module.exports = { fetchGithubProfile };
