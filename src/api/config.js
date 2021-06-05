import dotenv from 'dotenv';
import queryString from 'query-string';
import axios from 'axios';
import Cookies from 'js-cookie';

dotenv.config();

export const axiosClient = axios.create({
  baseURL: `https://517ab3fc4c4a.ngrok.io`,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${Cookies.get('hcmaid')}`,
  },
  paramsSerializer: (params) => queryString.stringify(params),
  withCredentials: true,
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

// axiosClient.interceptors.response.use((res) => {
//   if (res && res.data) {
//     return res.data;
//   }
// });