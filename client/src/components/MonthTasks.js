import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import moment from 'moment';
import { Col, Row } from 'react-bootstrap';
import EditTask from './modals/EditTask';

const MonthTasks = ({month, tasks}) => {
  
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
            {moment.weekdays().map((day) => {
              return <th>{day}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {Array.from(Array(6).keys()).map((week) => {
            return <tr>
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
                    .sort((a, b) => a.startTime - b.startTime)
                    .map((task) => {
                      return <Row 
                      className='bg-success bg-opacity-50 pb-2'
                      onClick={() => editTask(task)}>
                        <Row className="mx-1 p-0 fw-light text-black">{moment(task.startTime).format('HH:MM')}-{moment(task.endTime).format('HH:MM')}</Row> 
                        <Row className="mx-1 text-black fs-5">{task.name}</Row>
                      </Row>
                    })
                }</td>
              })}
            </tr>
          })}
        </tbody>
      </table>
      <EditTask show={modalVisible} onHide={() => setModalVisible(false)} task={taskToEdit} />
    </div>
   );
}

export default MonthTasks;