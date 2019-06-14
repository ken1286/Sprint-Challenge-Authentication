import axios from 'axios';

export const axiosAuth = () => {
  const token = localStorage.getItem('jwt');

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`
    }
  });
};