import React, { useContext, useEffect, useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { observer } from "mobx-react-lite";
import DateTimePickerModal from './DateTimePickerModal';
import { deleteTask, editTask, fetchTasks } from '../../http/taskAPI';
import { Context } from '../..';

const EditTask = observer( ({show, onHide, task}) => {
  const {tasks} = useContext(Context);
  const {user} = useContext(Context);

  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [startDateTime, setStartDateTime] = useState(task.startDateTime);
  const [endDateTime, setEndDateTime] = useState(task.endDateTime);

  const [startTimePicker, setStartTimePicker] = useState(false);
  const [endTimePicker, setEndTimePicker] = useState(false);

  useEffect(() => {
    setName(task.name);
    setDescription(task.description);
    setStartDateTime(task.startTime);
    setEndDateTime(task.endTime);
  }, [show])

  const editThisTask = () => {
    const edittedTask = {
        "name": name,
        "description": description,
        "startTime": startDateTime,
        "endTime": endDateTime,
        "userId": task.userId
    }
    console.log(edittedTask);
    if (name === "") {
      alert("Введите название задачи");
      return;
    }
    editTask(task.id, edittedTask).then(data => onHide());
    fetchTasks(user.User.id).then(data => tasks.setTaskList(data));
  }

  const deleteThisTask = () => {
    deleteTask(task.id).then(data => onHide());
    fetchTasks(user.User.id).then(data => tasks.setTaskList(data));
  }

  const setEndTime = (value) => {
    if (startDateTime == "") {
      alert("Сначала выберите дату начала");
      return;
    }
    if (value <= startDateTime) {
      alert('Конец должен быть позже начала');
      return;
    }
    setEndDateTime(value);
  }
  
  return ( 
    <Modal
    show={show}
    onHide={onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <DateTimePickerModal show={startTimePicker} onHide={() => setStartTimePicker(false)} setDateTime={setStartDateTime}/>
    <DateTimePickerModal show={endTimePicker} onHide={() => setEndTimePicker(false)} setDateTime={setEndTime}/>
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Редактировать задачу
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Row>
          <Col>
            <Form.Control 
              value={name}
              onChange={e => setName(e.target.value)}
              className=""
              placeholder={"Название задачи"}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control
              value={description}  
              onChange={e => setDescription(e.target.value)}        
              className="mt-3"
              placeholder={"Описание задачи"}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control 
              value={startDateTime}
              onChange={e => setStartDateTime(e.target.value)}
              className="mt-3"
              placeholder={"Дата начала"}
              type="datetime"
              onClick={() => setStartTimePicker(true)}
            />
          </Col>
          <Col>
            <Form.Control 
              value={endDateTime}
              onChange={e => setEndDateTime(e.target.value)}            
              className="mt-3"        
              placeholder={"Дата окончания"}
              type="datetime"
              onClick={() => setEndTimePicker(true)}
            />
          </Col>
        </Row>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="outline-danger" onClick={deleteThisTask}>Удалить</Button>
      <Button variant="outline-success" onClick={editThisTask}>Принять</Button>
    </Modal.Footer>
  </Modal>
    );
})

export default EditTask;