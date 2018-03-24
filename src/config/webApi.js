import axios from 'axios';
import Qs from 'qs';
let baseUrl = '';
let imgBaseUrl = '';
export function fetch(type, url, params) {
    return new Promise((resolve, reject) => {
      axios({
        method: type,
        url: url,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        data: Qs.stringify(params)
      }).then(res => {
        resolve(res);
      }).catch(error => {
        reject(error.response);
      })
    });
  }
  export default {
    commonApi(type, url, params) {
      return fetch(type, url, params);
    }
  }