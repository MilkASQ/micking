import axios from 'axios'
import store from '@/store/store'
import * as types from '@/store/type'
import router from '@/router/index'

//接口配置
var instance = axios.create({
    baseURL: '/api',
    timeout: 20000,
    headers: {
        'A-Auth-Token': store.state.token
        // 'Content-Type': 'application/json;charset=UTF-8'
    }
});

// http request 拦截器
instance.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
instance.interceptors.response.use(
    response => {
        if (response.data.code=="ADMIN_NOT_LOGIN") {
            store.commit(types.LOGOUT);
            router.push({
                path: '/index'
            });
        }
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: '/login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        return Promise.reject(error.response.data)
    });

export default instance
