import Cookies from "js-cookie";

// CHECK IF TOKEN AVAILABLE
export const getToken = () => {
  try {
    const token = Cookies.get("token");
    if(token.length > 0){
        return true
    } else {
        return false
    }
  } catch (error) {
    return false
  }
};

// REMOVE ALL COOKIE
export const removeToken = () => {
  try {
    Cookies.remove("token");
    Cookies.remove("role");
    localStorage.clear();
    return true
  } catch (error) {
    return false
  }
};

