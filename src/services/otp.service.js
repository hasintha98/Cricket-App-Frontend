import axios from "axios";
import { API_PATHS } from "../config/const";

const sendOTP = async (message, mobileNo) => {
    const URL = API_PATHS.SEND_SMS_URL + '&to=' + mobileNo + '&msg=' + message + '&msg_ref_num=A001'
    try {
        const response = await axios.post(URL)
        return response?.data
    } catch (e) {
        return e
    }
}

export { sendOTP }