import Axios from 'axios';
import { readCookie } from './utils';
//const apiBase = 'http://localhost:1337/v1/';
const apiBase = 'http://ec2-34-205-31-116.compute-1.amazonaws.com:1337/v1/';

export default class APIClient {

  constructor() {
    this.apiBase = apiBase;
  }

  get(endpoint, useAuth = false) {
    let config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    if (useAuth) {
      let authToken = readCookie('structurewebapp');
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return new Promise((resolve, reject)=> {
      Axios.get(this.apiBase + endpoint, config)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  post(endpoint, payload, useAuth = false) {
    let config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    if (useAuth) {
      let authToken = readCookie('structurewebapp');
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return new Promise((resolve, reject)=> {
      Axios.post(this.apiBase + endpoint, payload, config)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
