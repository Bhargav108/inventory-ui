import axios from "axios";

const BASE_URI = "http://api.apphelpify.com:9090";

export const fetchInventory = ({ limit, offset }) =>
  axios.get(`${BASE_URI}/products`);

export default {
  fetchInventory
};
