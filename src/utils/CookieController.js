import Cookies from "universal-cookie";
const cookies = new Cookies();

export const CookieController = {
  set(key, value) {
    cookies.set(key, JSON.stringify(value));
  },
  get(key) {
    let data = cookies.get(key);
    if (data) return data;
    return null;
  },
  remove(key) {
    cookies.remove(key);
  },
};
