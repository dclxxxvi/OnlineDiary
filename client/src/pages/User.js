import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Button, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import { Context } from '../index';
import CreateTask from '../components/modals/CreateTask';
import { fetchTasks } from '../http/taskAPI';
import { Route, useNavigate } from 'react-router-dom';
import { ALL_TASKS_ROUTE, MONTHS_TASKS_ROUTE, USER_ROUTE, WEEKS_TASKS_ROUTE } from '../utils/constants';

const User = observer( () => {
    const {user} = useContext(Context);
    const {tasks} = useContext(Context);
    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        fetchTasks(user.User.id).then(data => tasks.setTaskList(data));
    }, [])

    return (  
        <Container>
            <Row>
                <Button variant="outline-dark" className="m-3 col col-2" onClick={() => setModalVisible(true)}>Добавить задачу</Button>
                <Button variant="outline-dark" className="m-3 col col-2" onClick={() => navigate(USER_ROUTE + ALL_TASKS_ROUTE)}>Список задач</Button>
                <DropdownButton variant="outline-dark" className="m-3 col col-1" title="Отображение ">
                    <Dropdown.Item onClick={() => navigate(USER_ROUTE + WEEKS_TASKS_ROUTE)}>Недели</Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate(USER_ROUTE + MONTHS_TASKS_ROUTE)}>Месяца</Dropdown.Item>
                </DropdownButton> 
            </Row>
            <CreateTask show={modalVisible} onHide={() => setModalVisible(false)} />
        </Container>
    );
})

export default User;