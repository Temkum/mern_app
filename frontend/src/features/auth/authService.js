import axios from 'axios';

const API_URL = '/api/users/';

// Register user
const register = async (userData) => {
  // make req and set res in this variable
  const response = await axios.post(API_URL, userData);

  // set data in an obj including token
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Logout
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
};

export default authService;
