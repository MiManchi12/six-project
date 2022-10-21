import axios, {type AxiosRequestConfig} from "axios"
import Nprogress from "nprogress"
import "nprogress/nprogress.css"

const request = axios.create({
    baseURL: "/course", // 基础路径
    timeout: 20000 // 超时时间
})

request.interceptors.request.use(function (config:AxiosRequestConfig) {

    Nprogress.start();
    return config;
}, function (error) {
    Nprogress.done();

    return Promise.reject(error);
});


request.interceptors.response.use(function (response) {

    Nprogress.done();

    return response.data;
}, function (error) {

    Nprogress.done();
    return Promise.reject(error);
});

export default request
