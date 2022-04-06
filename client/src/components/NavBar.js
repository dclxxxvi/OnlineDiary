import React, { useContext } from 'react';
import { Context } from '../index';
import { Navbar, Nav, Container, Button, Image } from "react-bootstrap"
import { NavLink, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, MAIN_ROUTE, USER_ROUTE } from '../utils/constants';
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.setItem('token', '-1');
        navigate(MAIN_ROUTE);
    }

    return ( 
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={MAIN_ROUTE}>
                    <img
                    src="/assets/logo.png"
                    width="30px"
                    height="30px"
                    className="d-inline-block align-top mx-2"
                    />
                    Тудуду
                </Navbar.Brand>
                {user.IsAuth ?
                    <Nav className="ml-auto">
                        <Button className={"mx-2"} variant={"success"} onClick={() => navigate(USER_ROUTE)}>Личный кабинет</Button>
                        <Button className={"mx-2"} variant={"outline-light"} onClick={() => logOut()}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
})

export default NavBar;