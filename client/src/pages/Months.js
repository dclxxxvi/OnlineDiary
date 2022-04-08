import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import moment from 'moment';
import { Button, Row } from 'react-bootstrap';
import MonthTasks from '../components/MonthTasks';

const Months = observer(() => {
  const {tasks} = useContext(Context);

  const [month, setMonth] = useState(moment().date(1));

  const nextMonth = () => setMonth(moment(month).add(1, 'M'));
  const previousMonth = () => setMonth(moment(month).subtract(1, 'M'));

  return ( 
    <div>
        <MonthTasks 
          month={month} 
          previousMonth={previousMonth}
          nextMonth={nextMonth}
          tasks={tasks.TaskList}/>
    </div>
    );
})

export default Months;