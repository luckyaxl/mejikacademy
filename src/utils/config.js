import Cookies from "js-cookie";

// SET TOKEN
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

// GET ID
export const getID = () => {
  try {
    const token = Cookies.get("id");
    return token
  } catch (error) {
    return false
  }
}