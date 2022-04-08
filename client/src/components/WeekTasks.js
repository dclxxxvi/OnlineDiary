import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '..';
import moment from 'moment';
import { Col, Row } from 'react-bootstrap';
import EditTask from './modals/EditTask';

const WeekTasks = observer(({week, tasks, nextWeek, previousWeek}) => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({});

  const editTask = (task) => {
    setModalVisible(true);
    setTaskToEdit(task);
  }

  const makeDateTime = (dayOfWeek, hour) => {
    return week.second(0).minute(0).hour(hour).day(dayOfWeek);
  }

  return ( 
    //новый вариант на таблице
    <div className="table-responsive my-3">
      <table className="table table-sm table-hover">
        <thead className="bg-primary text-white">
          <tr>
            <th className="fs-5" onClick={() => previousWeek()}>&larr;</th>
            {moment.weekdays().map((day) => {
              return <th>{makeDateTime(day, 0).format('dddd DD.MM')}</th>;
            })}
            <th className="fs-5" onClick={() => nextWeek()}>&rarr;</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(Array(24).keys()).map((hour) => {
            return <tr>
                <th>{hour+":00"}</th>
                {moment.weekdays().map((day) => {
                  return <td className="p-0">
                    {tasks
                      .filter((task) => {
                        return makeDateTime(day, hour).isAfter(moment(task.startTime)) &&
                          makeDateTime(day, hour).isBefore(moment(task.endTime))
                      })
                      .map((task) => {
                          return <Row 
                          className="px-1 bg-success bg-opacity-50"
                          onClick={() => editTask(task)}
                          >{task.name}</Row>;
                      })}
                  </td>
                })}
              </tr>
          })}
        </tbody>
      </table>
      <EditTask show={modalVisible} onHide={() => setModalVisible(false)} task={taskToEdit} />
    </div>


    //старый вариант календаря на сетке
    // <div className="container-fluid p-4">
    //   <Row className="bg-secondary text-dark border-top border-bottom border-dark">
    //     <Col className="col-1 py-3"></Col>
    //     {moment.weekdays().map((day) => {
    //         return <Col className="py-3">{makeDateTime(day, 0).format('dddd DD.MM')}</Col>
    //       })}
    //   </Row>
    //   {Array.from(Array(24).keys()).map((hour) => {
    //     return (<Row className="">
    //       <Col className="col-1 border-bottom border-dark text-dark bg-secondary btn-group-vertical">{hour+":00"}</Col>
    //       {moment.weekdays().map((day) => {
    //         return (
    //           <Col className="border-bottom border-light-gray">
    //             {tasks
    //               .filter((task) => {
    //                 return ( 
    //                   makeDateTime(day, hour).isAfter(moment(task.startTime)) &&
    //                   makeDateTime(day, hour).isBefore(moment(task.endTime))
    //                 )
    //               })
    //               .map((task) => {
    //                 console.log(displayedTasks);
    //                 if (displayedTasks.indexOf(task.id) === -1) {
    //                   setDisplayedTasks([...displayedTasks, task.id]);
    //                   return <Row className="text-dark bg-gray-200">
    //                     {task.name}
    //                   </Row>
    //                 } else {
    //                   return <Row className="text-dark bg-gray-200">
    //                     {""}
    //                   </Row>
    //                 }
                    
    //               })}
    //             </Col>
    //           )
    //       })}
    //     </Row>)
    //   })
    //   }
    // </div>


   );
})

export default WeekTasks;