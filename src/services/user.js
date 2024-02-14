import api from "../configs/api";
import {getCookie} from "../utils/cookies"
const token=getCookie('accessToken');
console.log(token)
 const getProfile=()=>api.get("user/whoami",);
 export { getProfile};