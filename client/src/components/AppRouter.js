import React, { useContext } from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import { Context } from '../index';
import Auth from '../pages/Auth';
import Main from '../pages/Main';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, TASKLIST_ROUTE, TASK_ROUTE, USER_ROUTE, WEEKS_TASKS_ROUTE } from '../utils/constants';
import UserRouter from './UserRouter';

function AppRouter() {
    const {user} = useContext(Context);
    const {tasks} = useContext(Context);

    return ( 
        <Routes>
            <Route path={LOGIN_ROUTE} element={<Auth />} />
            <Route path={REGISTRATION_ROUTE} element={<Auth />} />
            <Route path={USER_ROUTE+"/*"} element={<UserRouter />} />
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