import axios from "axios";

const instance = axios.create({
    baseURL: "https://sourav-tinder-backend.herokuapp.com"
})

export default instance;