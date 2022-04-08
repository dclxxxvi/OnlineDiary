import { observer } from 'mobx-react-lite';
import moment from 'moment';
import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import EditTask from '../components/modals/EditTask.js';
import { Context } from '../index.js';

const AllTasks = observer(() => {
  const {tasks} = useContext(Context);

  const [modalVisible, setModalVisible] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({});

  const editTask = (task) => {
    setModalVisible(true);
    setTaskToEdit(task);
  }

  return ( 
    <div className="container">
      {tasks.TaskList.map((task) => {
        return <Row 
          className="m-2 bg-success bg-opacity-50"
          onClick={() => editTask(task)}
        >
          <Col className="col-4 m-1">
            <Row className="fw-bold">{moment(task.startTime).format("MMMM D YYYY, hh:mm")}</Row>
            <Row className="fw-bold">{moment(task.endTime).format("MMMM D YYYY, hh:mm")}</Row>
          </Col>
          <Col className="col-5 m-1">
            <Row className=" fs-5 fw-bold">{task.name}</Row>
            <Row className="">{task.description}</Row>
          </Col>
        </Row>
      })}
      <EditTask show={modalVisible} onHide={() => setModalVisible(false)} task={taskToEdit} />
    </div>
   );
})

export default AllTasks;