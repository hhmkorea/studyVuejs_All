import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8081/products',
    headers: {
        'Content-Type': 'application/json',
    },
});
export default axiosInstance;