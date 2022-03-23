import React, { useContext, useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { observer } from "mobx-react-lite";
import { Context } from '../..';
import { createTask } from '../../http/taskAPI';
import DateTimePickerModal from './DateTimePickerModal';

const CreateTask = observer( ({show, onHide}) => {
  const {user} = useContext(Context);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [startTimePicker, setStartTimePicker] = useState(false);
  const [endTimePicker, setEndTimePicker] = useState(false);

  const addTask = () => {
    const task = {
        "name": name,
        "description": description,
        "startTime": startTime,
        "endTime": endTime,
        "userId": user.User.id
    }
    createTask(task).then(data => onHide());
  }
  
  return ( 
    <Modal
    show={show}
    onHide={onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <DateTimePickerModal show={startTimePicker} onHide={() => setStartTimePicker(false)} setDateTime={setStartTime}/>
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
              value={startTime}
              onChange={e => setStartTime(e.target.value)}
              className="mt-3"
              placeholder={"Дата начала"}
              type="datetime"
              onClick={() => setStartTimePicker(true)}
            />
          </Col>
          <Col>
            <Form.Control 
              value={endTime}
              onChange={e => setEndTime(e.target.value)}            
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