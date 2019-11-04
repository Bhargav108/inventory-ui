import axios from "axios";

console.log(process.env.VUE_APP_API_BASE);

const BASE_URI = process.env.VUE_APP_API_BASE;

export const fetchInventory = ({ limit = 9, offset = 0 }) =>
  axios.get(`${BASE_URI}/products`);

export default {
  fetchInventory
};
