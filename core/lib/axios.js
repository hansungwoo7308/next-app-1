import axios from "axios";

const BASE_URL = "http://localhost:3000";

// export default axios.create({
//   baseURL: BASE_URL,
// });

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

const axiosCustom = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  // withCredentials: true,
});

export default axiosCustom;
