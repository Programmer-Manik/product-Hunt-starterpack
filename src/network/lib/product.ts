
import axiosClient from "../apiClient.axios";

export function getProduct(){
    return axiosClient.get('/product');
}

export { axiosClient };
