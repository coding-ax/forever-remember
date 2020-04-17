/**用于封装网络请求 */
import axios from "axios";
/** request是axios实例 */
export  function request(config) {
    const instance = axios.create({
        /**超时时间 */
        timeout: 5000
    })
    return instance;
};
