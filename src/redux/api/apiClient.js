import axios from "axios"

const apiClient = () => {
    const axiosInstance = axios.create({
        // headers: {
        //     'Access-Control-Allow-Origin': 'http://localhost:8090/'
        // },
        baseURL: process.env.REACT_APP_API_URL,
        responseType: "json",
    });

    return axiosInstance;
};

export default apiClient;