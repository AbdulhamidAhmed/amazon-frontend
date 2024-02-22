import axios from "axios";

const axiosInstance = axios.create({
  // local instance of amazon server
  // baseURL: "http://localhost:5000",

  //deployed version of amazon server on render.com
  baseURL: "https://amazon-backend-bl2k.onrender.com",
});

export { axiosInstance };
