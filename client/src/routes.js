import Auth from "./pages/Auth";
import Task from "./pages/Task";
import TaskList from "./pages/TaskList";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, TASKLIST_ROUTE, TASK_ROUTE } from "./utils/constants";

export const authRoutes = [
    {
        path: TASKLIST_ROUTE,
        Component: TaskList
    },
    {
        path: TASK_ROUTE,
        Component: Task
    }
];

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
];