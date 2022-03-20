import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode"

export const createTask = async (task) => {
    const {data} = await $authHost.post('api/task', task);
    return data;
}

export const fetchTasks = async () => {
    const {data} = await $host.get('api/task');
    return data;
}