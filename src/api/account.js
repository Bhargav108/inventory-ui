import axios from "@/utils/axios";

export const login = ({ email, password }) => {
  return axios.post(`/login`, { email, password });
};

export const register = ({ name, email, password }) => {
  return axios.post(`/register`, { name, email, password });
};

export default {
  login,
  register
};
