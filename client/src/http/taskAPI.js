import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode"
import { data } from "jquery";

export const createTask = async (task) => {
    const {data} = await $authHost.post('api/task', task);
    return data;
}

export const fetchTasks = async (userId) => {
    const {data} = await $authHost.get('api/task/' + userId);
    return data;
}

export const deleteTask = async (id) => {
    const {data} = await $authHost.delete('api/task/' + id);
    return data;
}

export const editTask = async (id, task) => {
    const {data} = await $authHost.put('api/task/' + id, task)
    return data;
}