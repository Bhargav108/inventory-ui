import axios from "axios";

const BASE_URI = process.env.VUE_APP_API_BASE;

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
