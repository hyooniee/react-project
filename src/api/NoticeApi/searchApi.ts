import { Axios, AxiosResponse } from "axios";
import { searchApi } from "./../CommonCodeApi/searchApi";
export const searchApi = async () => {
    try {
        const result :AxiosResponse<T>= await axios.post (api,param);
        
        
    } catch (error) {}
};
