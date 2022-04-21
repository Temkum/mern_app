import axios from 'axios';

// create api url for this state
const API_URL = '/api/goals/';

// create new goal
const createGoal = async (goalData, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const response = await axios.post(API_URL, goalData, config);

  return response.data;
};

// export
const goalService = {
  createGoal,
};

export default goalService;