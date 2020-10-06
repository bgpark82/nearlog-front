import axios from 'axios';

const API = axios.create({
    baseURL: 'https://test-api.gagopar.com'
});

export default API;