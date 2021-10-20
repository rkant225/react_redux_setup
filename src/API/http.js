import axios from "axios";

const http = axios.create({
    baseURL: `https://random-data-api.com/api/`,
});

export default http;