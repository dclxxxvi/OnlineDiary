import React, { useState } from 'react';
import { Modal, Button, Form, Row, FloatingLabel, Col } from 'react-bootstrap';

function DateTimePickerModal({show, onHide, setDateTime}) {

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const onClick = () => {
    onHide();
    setDateTime(date + " " + time);
  }

  return ( 
    <Modal
    show={show}
    onHide={onHide}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <Form className="d-flex justify-content-between">
        <Col>
          <Form.Label className="m-2">
            Выберите дату
          </Form.Label>
          <Form.Control 
            value={date}
            onChange={e => setDate(e.target.value)}
            className="m-2"
            size="sm"
            type="date"
            placeholder={"Выберите дату"}
          />
        </Col>
        <Col>
          <Form.Label className="m-2">
            Выберите время
          </Form.Label>
          <Form.Control 
            value={time}
            onChange={e => setTime(e.target.value)}
            className="m-2"
            size="sm"
            type="time"
            placeholder={"Выберите время"}
          />
        </Col>
      </Form>
      <Modal.Footer>
        <Button variant="outline-danger" size="sm" className="m-0 mx-3" onClick={onHide}>Отменить</Button>
        <Button variant="outline-success" size="sm" className="m-0 mx-3" onClick={onClick}>Принять</Button>
      </Modal.Footer>
    </Modal>
   );
}

export default DateTimePickerModal;