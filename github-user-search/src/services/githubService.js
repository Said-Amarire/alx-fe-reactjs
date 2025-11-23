import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const searchUsers = async (query, location = '', minRepos = 0) => {
  try {
    let searchQuery = `${query}`;
    if (location) searchQuery += `+location:${location}`;
    if (minRepos) searchQuery += `+repos:>=${minRepos}`;

    const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}`);
    return response.data.items;
  } catch (error) {
    console.error("Error searching users:", error);
    throw error;
  }
};
