import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import TodoList from './TodoList';
import moment from "moment"

function TaskCalendar({tasks}) {


  return ( 
      <div className="row row-cols-md-6">
        {Array.from({length: moment().daysInMonth()}, (x, i) => moment().startOf('month').add(i, 'days'))
          .map((day) => {
            return (
              <TodoList 
              className="col"
                date={day}
                tasks={tasks.filter((task) => 
                  moment(task.startTime).date() === day.date() &&
                  moment(task.startTime).month() === day.month() &&
                  moment(task.startTime).year() === day.year()
                )}
              />
            )
          })
        }
      </div>
  )}

export default TaskCalendar;

// //<ListGroupItem key={day.format("d, MMMM D YYYY")}>
// {day.format("d, MMMM D YYYY")}
// </ListGroupItem>