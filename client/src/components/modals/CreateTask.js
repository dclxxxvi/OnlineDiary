import React, { useContext, useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { observer } from "mobx-react-lite";
import { Context } from '../..';
import { createTask, fetchTasks } from '../../http/taskAPI';
import DateTimePickerModal from './DateTimePickerModal';

const CreateTask = observer( ({show, onHide}) => {
  const {user} = useContext(Context);
  const {tasks} = useContext(Context);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");

  const [startTimePicker, setStartTimePicker] = useState(false);
  const [endTimePicker, setEndTimePicker] = useState(false);

  const addTask = () => {
    const task = {
        "name": name,
        "description": description,
        "startTime": startDateTime,
        "endTime": endDateTime,
        "userId": user.User.id
    }
    if (name === "") {
      alert("Введите название задачи");
      return;
    }

    createTask(task).then(data => {
      fetchTasks(user.User.id).then(data => tasks.setTaskList(data))
      onHide()
      })
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
        Создать задачу
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
      <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
      <Button variant="outline-success" onClick={addTask}>Добавить</Button>
    </Modal.Footer>
  </Modal>
    );
})

export default CreateTask;