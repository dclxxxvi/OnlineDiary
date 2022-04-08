import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import moment from 'moment';
import { Col, Row } from 'react-bootstrap';
import EditTask from './modals/EditTask';

const MonthTasks = ({month, tasks, previousMonth, nextMonth}) => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({});

  const editTask = (task) => {
    setModalVisible(true);
    setTaskToEdit(task);
  }

  const makeDateTime = (week, day) => {
    return moment(month).add(week, 'w').day(day).hour(0).minute(0).second(0);
  }

  return ( 
    <div className="table-responsive my-3">
      <table className="table table-sm table-hover">
        <caption className="caption-top px-2"><h1>{month.format("MMMM YYYY")}</h1></caption>
        <thead className="bg-primary text-white">
          <tr>
            <th className="px-3" role="button" onClick={() => previousMonth()}>&lt;</th>
            {moment.weekdays().map((day) => {
              return <th>{day}</th>;
            })}
            <th className="px-3" role="button" onClick={() => nextMonth()}>&gt;</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(Array(6).keys()).map((week) => {
            return <tr><td></td>
              {moment.weekdays().map((day) => {
                return <td className='px-3'>
                  <Row className="fw-bold fs-5 mb-2">
                    {makeDateTime(week, day).format("D")}
                  </Row>
                  {tasks
                    .filter((task) => {
                      return  makeDateTime(week, day).add(23,'h').isAfter(task.startTime) &&
                              makeDateTime(week, day).isBefore(task.endTime)
                    })
                    .sort((a, b) => new Date(a.startTime) - new Date(b.startTime))
                    .map((task) => {
                      return <Row 
                      className='bg-success bg-opacity-50 pb-2'
                      role="button"
                      onClick={() => editTask(task)}>
                        <Row className="mx-1 p-0 fw-light text-black">{moment(task.startTime).format('DD MMM HH:MM')} - {moment(task.endTime).format('DD MMM HH:MM')}</Row> 
                        <Row className="mx-1 text-black fs-5">{task.name}</Row>
                      </Row>
                    })
                }</td>
              })}
              <td></td>
            </tr>
          })}
        </tbody>
      </table>
      <EditTask show={modalVisible} onHide={() => setModalVisible(false)} task={taskToEdit} />
    </div>
   );
}

export default MonthTasks;