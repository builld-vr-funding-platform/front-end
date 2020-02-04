import axios from 'axios';

// TODO: replace baseURL with our backend API

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://sprint-challenge-authenticat.herokuapp.com/api',
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;