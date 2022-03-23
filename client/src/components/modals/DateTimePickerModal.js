import React, { useState } from 'react';
import { Modal, Button, Form, Row, FloatingLabel } from 'react-bootstrap';

function DateTimePickerModal({show, onHide, setDateTime}) {

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const onClick = () => {
    onHide();
    setDateTime(date + "T" + time);
  }

  return ( 
    <Modal
    show={show}
    onHide={onHide}
    size="sm"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <Form className="d-flex justify-content-between">
        <Form.Control 
          value={date}
          onChange={e => setDate(e.target.value)}
          className="m-3"
          size="sm"
          type="date"
          placeholder={"Выберите дату"}
        />
        <Form.Control 
          value={time}
          onChange={e => setTime(e.target.value)}
          className="m-3"
          size="sm"
          type="time"
          placeholder={"Выберите время"}
        />
      </Form>
      <Modal.Footer>
        <Button variant="outline-danger" size="sm" className="m-0 mx-3" onClick={onHide}>Отменить</Button>
        <Button variant="outline-success" size="sm" className="m-0 mx-3" onClick={onClick}>Принять</Button>
      </Modal.Footer>
    </Modal>
   );
}

export default DateTimePickerModal;