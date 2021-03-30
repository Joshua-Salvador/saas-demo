import axios from "axios";

let url = "http://localhost:5000/yektopro-347fb/asia-east2/api";
// eslint-disable-next-line no-restricted-globals
if (location.hostname === "localhost") {
  url = "http://localhost:5001/yektopro-347fb/asia-east2/api";
}
console.log(url);
const instance = axios.create({
  baseURL: url,
  headers: {
    Authorization: localStorage.getItem("token"),
  },
});

axios.interceptors.request.use((req) => {
  req.headers.Authorization = localStorage.getItem("token");
  return req;
});

export default instance;
