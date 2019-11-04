import axios from "axios";

const BASE_URI = "http://localhost:9000";

export const login = ({ email, password }) => {
  return axios.post(`${BASE_URI}/login`, { email, password });
};

export const register = ({ name, email, password }) => {
  return axios.post(`${BASE_URI}/register`, { name, email, password });
};

export default {
  login,
  register
};
