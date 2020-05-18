import axios from "axios";
import { memoize } from "lodash";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default {
  getPosts: async () => {
    return api.get("/posts");
  },

  getUser: memoize(async (id) => {
    return api.get(`/users/${id}`);
  }),
};
