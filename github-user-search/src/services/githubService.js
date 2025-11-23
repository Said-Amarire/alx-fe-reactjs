// src/services/githubService.js
import axios from "axios";

/**
 * Fetch GitHub users based on query, location, and minimum repos
 * @param {Object} options
 * @param {string} options.username - GitHub username to search
 * @param {string} options.location - Location filter (optional)
 * @param {number} options.minRepos - Minimum public repos filter (optional)
 * @returns {Promise<Object>} - GitHub API search results
 */
export const searchUsers = async ({ username, location, minRepos } = {}) => {
  try {
    let query = username ? `${username} in:login` : "";

    if (location) {
      query += ` location:${location}`;
    }

    if (minRepos) {
      query += ` repos:>=${minRepos}`;
    }

    const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

    const response = await axios.get(url);
    return response.data; // يحتوي على items: [..users..]
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
