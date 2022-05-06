import axios from 'axios';

const BASE_URL = "http://54.177.162.207:5000/api/";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});