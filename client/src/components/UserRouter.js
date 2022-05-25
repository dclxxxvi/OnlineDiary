import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import User from '../pages/User';
import Months from '../pages/Months';
import Weeks from '../pages/Weeks';
import { ALL_TASKS_ROUTE, MONTHS_TASKS_ROUTE, USER_ROUTE, WEEKS_TASKS_ROUTE } from '../utils/constants';
import AllTasks from '../pages/AllTasks';



function UserLayout() {
  return ( 
    <div>
      <User />
      <Outlet />
    </div>
   );
}

export default UserLayout;