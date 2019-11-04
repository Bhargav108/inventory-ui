import axios from "axios";

const BASE_URI = "http://api.apphelpify.com:9090";

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
