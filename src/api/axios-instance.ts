import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.BASE_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});
