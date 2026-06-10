const { fetchGithubProfile } = require("../services/githubService");
const {
  saveProfile,
  getAllProfiles,
  getProfileByUsername,
  getTopProfiles,
  searchProfiles,
} = require("../models/profileModel");

const fetchAllProfiles = async (req, res) => {
  try {
    const profiles = await getAllProfiles();

    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const fetchSingleProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const profile = await getProfileByUsername(username);

    if (profile.length === 0) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    res.status(200).json(profile[0]);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const analyzeProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const { user, repos } = await fetchGithubProfile(username);

    // Calculate Top Language
    const languageCount = {};

    repos.forEach((repo) => {
      if (repo.language) {
        languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
      }
    });

    const topLanguage =
      Object.keys(languageCount).sort(
        (a, b) => languageCount[b] - languageCount[a],
      )[0] || "Unknown";

    // Calculate Profile Score
    const profileScore =
      user.public_repos * 2 + user.followers * 3 + user.following;

    const profileData = [
      user.login,
      user.name,
      user.bio,
      user.public_repos,
      user.followers,
      user.following,
      new Date(user.created_at).toISOString().slice(0, 19).replace("T", " "),
      topLanguage,
      profileScore,
    ];

    await saveProfile(profileData);

    res.status(200).json({
      username: user.login,
      name: user.name,
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      topLanguage: topLanguage,
      profileScore: profileScore,
      message: "Profile analyzed and stored successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const fetchTopProfiles = async (req, res) => {
  try {
    const profiles = await getTopProfiles();

    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const searchProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const profiles = await searchProfiles(username);

    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  analyzeProfile,
  fetchAllProfiles,
  fetchSingleProfile,
  fetchTopProfiles,
  searchProfile,
};
