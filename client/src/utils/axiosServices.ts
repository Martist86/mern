import axios from "axios";

const headers = {
    'Content-Type': 'application/json',
    'Token': localStorage.getItem('token')
};
export const postAsync = async (url: string, payload: any) => {
    const config = { headers };
    const body = JSON.stringify(payload);
    return await axios.post(url, body, config);   
};
export const putAsync = async (url: string, payload: any) => {
    const config = { headers };
    const body = JSON.stringify(payload);
    return await axios.put(url, body, config);
};