import axios from "axios"
import { API_URL } from "../utils/env"

const apiInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true
})

export default apiInstance