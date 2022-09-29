import axios from "axios";

const API_URL = "http://localhost:3000/pages/api/auth/";

const register = (username, email, password) => {
  return axios
    .post(API_URL + "register", {
      username,
      email,
      password,
    })
    .then((response) => {
      console.log("response : ", response);
    });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log("successfully saved the accessToken in localStorage.");
      }
      console.log("response.data : ", response.data);
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authServices = {
  register,
  login,
  logout,
};

export default authServices;
// object containing custom methods...
