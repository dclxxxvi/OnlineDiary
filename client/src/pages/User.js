import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Context } from '../index';
import CreateTask from '../components/modals/CreateTask';
import TodoList from '../components/TodoList';
import { fetchTasks } from '../http/taskAPI';
import TaskCalendar from '../components/TaskCalendar';

const User = observer( () => {
    const {user} = useContext(Context);
    const {tasks} = useContext(Context);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        fetchTasks(user.User.id).then(data => tasks.setTaskList(data));
    }, [modalVisible])

    return (  
        <Container>
            <Button variant="outline-dark" className="my-4" onClick={() => setModalVisible(true)}>Добавить задачу</Button>
            <TaskCalendar tasks={tasks.TaskList}/>
            <CreateTask show={modalVisible} onHide={() => setModalVisible(false)} />
        </Container>
    );
})

export default User;