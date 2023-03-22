import axios from "axios";
import { API_PATHS } from "../config/const";

const loginRegister = async (username, password) => {

    const data = { username, password }

    try {
    const response = await axios.post(API_PATHS.LOGIN_REGISTER_URL, data)
    return response.data
    } catch (e) {
        console.log(e)
    }
}

export {
    loginRegister
}