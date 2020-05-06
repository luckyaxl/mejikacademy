import Cookies from "js-cookie";

let authToken = "";
export const setToken = async token => {
  try {
    authToken = token ? `Bearer ${token}` : "";
    Cookies.set("token", authToken, { expires: 7 });
  } catch (error) {
    console.log(error);
  }
};