import React from 'react';
import { Route, Routes } from 'react-router-dom';
import User from '../pages/User';
import Months from '../pages/Months';
import Weeks from '../pages/Weeks';
import { ALL_TASKS_ROUTE, MONTHS_TASKS_ROUTE, USER_ROUTE, WEEKS_TASKS_ROUTE } from '../utils/constants';
import AllTasks from '../pages/AllTasks';



function UserRouter() {
  return ( 
    <div>
      <User />
      <Routes>
        <Route path={WEEKS_TASKS_ROUTE} element={<Weeks />} />
        <Route path={MONTHS_TASKS_ROUTE} element={<Months />} />
        <Route path={ALL_TASKS_ROUTE} element={<AllTasks />} />
      </Routes>
    </div>
   );
}

export default UserRouter;