import axios from "axios";
import QS from "qs";
import { Toast } from "vant";

// 创建axios实例
const instance = axios.create({
  timeout: 10000,
});

const toastscuess = () => {
  Toast({
    message: "加载成功",
  });
};

// 判断环境设置baseUrl
if (process.env.NODE_ENV == "development") {
  instance.defaults.baseURL = "https://m.you.163.com";
} else if (process.env.NODE_ENV == "debug") {
  instance.defaults.baseURL = "https://m.you.163.com";
} else if (process.env.NODE_ENV == "production") {
  instance.defaults.baseURL = "https://m.you.163.com";
}

// 设置默认请求头
instance.defaults.headers = {};
// post请求的请求头
// instance.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded;charset=UTF-8";

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    toastscuess();
    return config;
  },
  (error) => {
    return Promise.error(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    console.log(response);
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, {
        params: params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, QS.stringify(params))
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
