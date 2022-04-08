import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import moment from 'moment';
import { Button, Row } from 'react-bootstrap';
import WeekTasks from '../components/WeekTasks';

const Weeks = observer(() => {
  const {tasks} = useContext(Context);

  const [week, setWeek] = useState(moment());

  const nextWeek = () => {
    setWeek(moment(week).add(1, 'w'))
  }

  const previousWeek = () => {
    setWeek(moment(week).subtract(1, 'w'))
  }

  return ( 
        <WeekTasks 
          week={week} 
          nextWeek={nextWeek}
          previousWeek={previousWeek}
          tasks={
            tasks.TaskList.filter((task) => {
              return week.isAfter(moment(task.startTime)) &&
                moment(week).subtract(1, 'w').isBefore(moment(task.endTime))
            })
          }/>
    );
})

export default Weeks;