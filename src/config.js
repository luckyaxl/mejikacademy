import Cookies from "js-cookie";

let authToken = "";
export const setToken = async (token, role) => {
  try {
    authToken = token ? `Bearer ${token}` : "";
    Cookies.set("token", authToken, { expires: 7 });
    Cookies.set("role", role);
  } catch (error) {
    console.log(error);
  }
};
