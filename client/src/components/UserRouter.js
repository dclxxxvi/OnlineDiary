import React from 'react';
import { Route, Routes } from 'react-router-dom';
import User from '../pages/User';
import Months from '../pages/Months';
import Weeks from '../pages/Weeks';
import { MONTHS_TASKS_ROUTE, USER_ROUTE, WEEKS_TASKS_ROUTE } from '../utils/constants';



function UserRouter() {
  return ( 
    <div>
      <User />
      <Routes>
        <Route path={WEEKS_TASKS_ROUTE} element={<Weeks />} />
        <Route path={MONTHS_TASKS_ROUTE} element={<Months />} />
      </Routes>
    </div>
   );
}

export default UserRouter;