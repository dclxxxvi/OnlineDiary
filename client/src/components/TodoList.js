import React from 'react';
import { Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import moment from 'moment';


//Лист в котором будут высвечиваться таски за один конкретный день. 

function TodoList({tasks, date}) {
    return (
        <Card className="p-0">
            <Card.Header>{date.format("MMMM D")}</Card.Header>
            <ListGroup>
                {tasks.map((task) => {
                    return (<ListGroupItem key={task.id} className="">
                        <div className="row">
                            <h5 className="col">{task.name}</h5>
                            <div className="col">{moment(task.startTime).format("HH:mm")} - {moment(task.endTime).format("HH:mm")}</div>
                        </div>
                        <div className="row">
                            <div className="col text-black-50 text-monospace">{task.description}</div>
                        </div>
                    </ListGroupItem>
                )})}
            </ListGroup>
        </Card>
    );
}

export default TodoList;