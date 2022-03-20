import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';


//Лист в котором будут высвечиваться таски за один конкретный день. 

function TodoList({tasks}) {
    return (
        <Card>
            <Card.Header>TaskList</Card.Header>
            <ListGroup>
                {tasks.map((task) => {
                    return (<ListGroupItem key={task.id}>
                        {task.name}
                    </ListGroupItem>
                )})}
            </ListGroup>
        </Card>
    );
}

export default TodoList;