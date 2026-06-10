const express = require("express");
const router = express.Router();

const {
  analyzeProfile,
  fetchAllProfiles,
  fetchSingleProfile,
  fetchTopProfiles,
  searchProfile,
} = require("../controllers/githubController");

console.log({
  analyzeProfile,
  fetchAllProfiles,
  fetchSingleProfile,
  fetchTopProfiles,
  searchProfile,
});

router.get("/analyze/:username", analyzeProfile);

router.get("/profiles", fetchAllProfiles);

router.get("/profiles/:username", fetchSingleProfile);

router.get("/top-profiles", fetchTopProfiles);

router.get("/search/:username", searchProfile);

module.exports = router;
