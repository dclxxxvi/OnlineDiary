import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import moment from 'moment';
import { Button, Row } from 'react-bootstrap';
import WeekTasks from '../components/WeekTasks';

const Weeks = observer(() => {
  const {tasks} = useContext(Context);

  const [week, setWeek] = useState(moment());

  return ( 
    <div>
      <Row className="d-flex justify-content-center">
        <Button 
          variant="primary" 
          className="mx-2 col col-1 text-white" 
          onClick={() => setWeek(moment(week).subtract(1, 'w'))}>
            Предыдущая
          </Button>
        <Button 
          variant="primary" 
          className="mx-2 col col-1 text-white" 
          onClick={() => setWeek(moment())}>
            Текущая
          </Button>
        <Button 
          variant="primary" 
          className="mx-2 col col-1 text-white" 
          onClick={() => setWeek(moment(week).add(1, 'w'))}>
            Следующая
          </Button>
      </Row>
      <Row>
        <WeekTasks 
          week={week} 
          tasks={
            tasks.TaskList.filter((task) => {
              return week.isAfter(moment(task.startTime)) &&
                moment(week).subtract(1, 'w').isBefore(moment(task.endTime))
            })
          }/>
      </Row>
    </div>
    );
})

export default Weeks;