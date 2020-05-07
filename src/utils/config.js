import Cookies from "js-cookie";

let authToken = "";
export const setToken = async (token, role, id) => {
  try {
    authToken = token ? `Bearer ${token}` : "";
    Cookies.set("token", authToken, { expires: 7 });
    Cookies.set("role", role);
    Cookies.set("id", id);
  } catch (error) {
    console.log(error);
  }
};
