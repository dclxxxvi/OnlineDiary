import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode"

export const createTask = async (task) => {
    const {data} = await $authHost.post('api/task', task);
    return data;
}

export const fetchTasks = async (id) => {
    const {data} = await $authHost.get('api/task/' + id);
    return data;
}