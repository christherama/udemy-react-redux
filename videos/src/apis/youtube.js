import axios from "axios";

const API_KEY = "AIzaSyDzxViyhIYiU5BO2yKF317zt-ii2MHXT98";

const youTubeApi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: API_KEY,
    part: "snippet",
    type: "video",
    maxResults: 5,
  },
});

export default {
  getbySearchTerm: (term) => {
    return youTubeApi.get("/search", {
      params: {
        key: API_KEY,
        part: "snippet",
        type: "video",
        maxResults: 5,
        q: term,
      },
    });
  },
};
