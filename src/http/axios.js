import axios from "axios";

const requests = axios.create({
  baseURL: "",
  timeout: 6000,
});

requests.interceptors.request.use((config) => {
  //   const token = Vue.ls.get(ACCESS_TOKEN)
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["token"] = token; // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config;
}, err);

requests.interceptors.response.use((response) => {
  const res = response.data;
  if (res.code !== 0 && res.code !== 200) {
    Notify({ type: "danger", message: res.message || res.msg });
    // 401:未登录;
    if (res.code === 401 || res.code === 403 || res.code === 999) {
      Notify({ type: "danger", message: "请登录" });
    }
    return Promise.reject("error");
  } else {
    return res;
  }
}, err);

export default {
  requests,
};
