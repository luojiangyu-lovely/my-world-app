import axios from 'axios';

import { BASE_URL, TIMEOUT } from "./config";

const service= axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});

// http request 拦截器
service.interceptors.request.use(config => {
  // 发送网络请求时, 在界面的中间位置显示Loading的组件,使用ant-design插件，这里不再赘述
  //请求携带的信息
	config.headers = {
		'Content-Type':'application/json'
	};
  return config;
}, err => {
	//...关闭加载loading的组件，显示消息提示弹窗
	return err;
});

// http response 拦截器
service.interceptors.response.use(res => {
  return res.data;
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log("请求错误");
        break;
      case 401:
        console.log("未授权访问");
        break;
      default:
        console.log("其他错误信息");
    }
  }
  return err;
});

export const get =(url, data)=>{
    return new Promise((resolve, reject)=>{
        axios.get(url,{params:data}).then(res=>{
            resolve(res.data)
        }).catch((err=>{
            reject(err)
        }))
    })
    
}
export const post =(url, data)=>{
    return new Promise((resolve, reject)=>{
        axios.get(url,data).then(res=>{
            resolve(res.data)
        }).catch((err=>{
            reject(err)
        }))
    })
    
}
// export default {get, post};
