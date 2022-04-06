import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import moment from 'moment';
import { Button, Row } from 'react-bootstrap';
import MonthTasks from '../components/MonthTasks';

const Months = observer(() => {
  const {tasks} = useContext(Context);

  const [month, setMonth] = useState(moment().date(1));

  return ( 
    <div>
      <Row className="d-flex justify-content-center">
        <Button 
          variant="primary" 
          className="mx-2 col col-1 text-white" 
          onClick={() => setMonth(moment(month).subtract(1, 'M'))}>
            Предыдущий
          </Button>
        <Button 
          variant="primary" 
          className="mx-2 col col-1 text-white" 
          onClick={() => setMonth(moment())}>
            Текущий
          </Button>
        <Button 
          variant="primary" 
          className="mx-2 col col-1 text-white" 
          onClick={() => setMonth(moment(month).add(1, 'M'))}>
            Следующий
          </Button>
      </Row>
      <Row>
        <MonthTasks 
          month={month} 
          tasks={tasks.TaskList}/>
      </Row>
    </div>
    );
})

export default Months;