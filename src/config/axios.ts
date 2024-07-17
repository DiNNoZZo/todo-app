import axiosOrg from 'axios';

const axios = axiosOrg.create({
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {    
    return Promise.reject(err);
  }
);

export default axios;