import React, { useContext } from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import AllTasks from '../pages/AllTasks';
import Auth from '../pages/Auth';
import Main from '../pages/Main';
import Months from '../pages/Months';
import Weeks from '../pages/Weeks';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, TASKLIST_ROUTE, TASK_ROUTE, USER_ROUTE, WEEKS_TASKS_ROUTE } from '../utils/constants';
import UserLayout from './UserRouter';
import UserRouter from './UserRouter';

function AppRouter() {
    return ( 
        <Routes>
            <Route path={'/login'} element={<Auth />} />
            <Route path={'/registration'} element={<Auth />} />
            <Route path={'/user/'} element={<UserLayout />}>
                <Route path={'weeks'} element={<Weeks />} />
                <Route path={'months'} element={<Months />} />
                <Route path={'all_tasks'} element={<AllTasks />} />
            </Route>
            <Route path="*" element={<Main />} />
        </Routes>
    );
}

export default AppRouter;


//mapping route
{/* {isAuth && authRoutes.map(({path, Component}) => {
    <Route key={path} path={path} element={<Auth />} exact/>
    })}
{publicRoutes.map(({path, Component}) => {
    <Route key={path} path={path} element={<Auth />} exact/>
    })} */}