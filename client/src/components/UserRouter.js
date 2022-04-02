import React from 'react';
import { Route, Routes } from 'react-router-dom';
import User from '../pages/User';
import Weeks from '../pages/Weeks';
import { USER_ROUTE, WEEKS_TASKS_ROUTE } from '../utils/constants';


function UserRouter() {
  return ( 
    <div>
      <User />
      <Routes>
        <Route path={WEEKS_TASKS_ROUTE} element={<Weeks />} />
      </Routes>
    </div>
   );
}

export default UserRouter;