import React, { useState } from 'react';
import { Modal, Button, Form, Row, FloatingLabel, Col } from 'react-bootstrap';
import moment from 'moment';

// function DatePickerPart({date, setDate}) {

//   const makeDay = (week, day) => {
//     return moment(date.date(1)).add(week, 'w').day(day);
//   }

//   return (
//     <table className="table">
//       <caption className="caption-top px-2 text-capitalize">
//         <Row>
//           <Col className="px-3" role="button" onClick={() => setDate(moment(date).subtract(1, 'M'))}>
//             &lt;
//           </Col>
//           <Col>
//             {date.format("MMMM YYYY")}
//           </Col>
//           <Col className="px-3" role="button" onClick={() => setDate(moment(date).add(1, 'M'))}>
//             &gt;
//           </Col>
//         </Row>
//       </caption>
//       <thead className="bg-primary text-white">
//         <tr>
//           {moment.weekdays(true).map((day) => {
//             return <th className='text-capitalize'>{makeDay(1, day).format('dd')}</th>;
//           })}
//         </tr>
//       </thead>
//       <tbody>
//         {Array.from(Array(6).keys()).map((week) => {
//           return <tr>
//               {moment.weekdays().map((day) => {
//                 return (
//                   (moment().month() === moment(makeDay(week, day)).month()) ?
//                     (moment().date() === moment(makeDay(week, day).date())) ?
//                     <td className="p-0 bg-success bg-opacity-50" role="button" onClick={() => setDate(makeDay(week, day))}>
//                       {makeDay(week, day).format("D")}
//                     </td>
//                     :
//                     <td className="p-0 bg-light bg-opacity-50" role="button" onClick={() => setDate(makeDay(week, day))}>
//                       {makeDay(week, day).format("D")}
//                     </td>
//                   :
//                   <td className="p-0 bg-secondary bg-opacity-50" role="button" onClick={() => setDate(makeDay(week, day))}>
//                     {makeDay(week, day).format("D")}
//                   </td>
//                 )
//               })}
//             </tr>
//         })}
//       </tbody>
//     </table>
//   )
// }


function DateTimePickerModal({show, onHide, setDateTime}) {

  const [date, setDate] = useState(moment());
  const [time, setTime] = useState(moment());

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