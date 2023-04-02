import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8c15d97066c647a581de8cc6a30ae45e",
  },
});

export default apiClient;
