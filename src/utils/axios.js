import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.VUE_APP_API_BASE,
  timeout: 3000
});

Axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401)
      window.history.pushState(null, null, "/login");
  }
);

export default Axios;
