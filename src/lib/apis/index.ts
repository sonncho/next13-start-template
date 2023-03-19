import axios, { InternalAxiosRequestConfig } from 'axios';

//* axios Instance settings
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  //## Insert Options
  // params: {
  //   api_key: 'api Key here',
  //   language: 'ko-KR',
  // },
});

//* axios intercepter settings
// ex) accessToken & refreshToken
const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const { method, url } = config;
  console.log(method, url);

  return config;
};

axiosInstance.interceptors.request.use(onRequest);

export default axiosInstance;
