import React, { useContext } from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import { Context } from '../index';
import Auth from '../pages/Auth';
import Main from '../pages/Main';
import Task from '../pages/Task';
import TaskList from '../pages/TaskList';
import { authRoutes, publicRoutes } from '../routes';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, TASKLIST_ROUTE, TASK_ROUTE } from '../utils/constants';

function AppRouter() {
    const {user} = useContext(Context);

    console.log(user);
    return ( 
        <Routes>
            <Route path={LOGIN_ROUTE} element={<Auth />}/>
            <Route path={REGISTRATION_ROUTE} element={<Auth />}/>
            <Route path={TASK_ROUTE} element={<Task />}/>
            <Route path={TASKLIST_ROUTE} element={<TaskList />}/>
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