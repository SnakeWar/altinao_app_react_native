/**
 * Created by Mayrc on 09/03/2019.
 */
import axios from "axios";

const api = axios.create({
    baseURL: 'http://172.17.192.161:8000/api'
});

export default api;