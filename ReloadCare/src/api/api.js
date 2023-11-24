import axios from "axios";

const api = axios.create({
  baseURL: "https://reloadcare-rm88383-v2.azurewebsites.net/api/",
});

export default api;