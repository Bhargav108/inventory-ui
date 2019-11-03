import axios from "axios";

const BASE_URI = "http://localhost:9000";

export const fetchInventory = ({ limit, offset }) =>
  axios.get(`${BASE_URI}/products`);

export default {
  fetchInventory
};
