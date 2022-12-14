import axios from "axios";

export const setAuthToken = (token) => {
  axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
};
export const removeAuthToken = (token) => {
  axios.defaults.headers.common["authorization"] = ``;
};
