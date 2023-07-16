import axios from "axios";

const api = axios.create({
    baseURL: 'https://labeddit-backend-1d7e.onrender.com'
})

export default api