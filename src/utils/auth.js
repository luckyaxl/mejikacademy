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
