import axios from "@/utils/axios";

export const fetchInventory = () => axios.get(`/products`);

export default {
  fetchInventory
};
