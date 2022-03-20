import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Context } from '../index';
import CreateTask from '../components/modals/CreateTask';
import TodoList from '../components/TodoList';
import { fetchTasks } from '../http/taskAPI';

const User = observer( () => {
    const {tasks} = useContext(Context);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        fetchTasks().then(data => tasks.setTaskList(data));
    }, [])
    return (  
        <Container>
            <Button variant="outline-dark" className="mt-4" onClick={() => setModalVisible(true)}>Добавить задачу</Button>
            <CreateTask show={modalVisible} onHide={() => setModalVisible(false)} />
            
        </Container>
    );
})

export default User;