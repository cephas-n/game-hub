import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5c433835da6845b294e87e86b38d0555",
  },
});

export default apiClient;
