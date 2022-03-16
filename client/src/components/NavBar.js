import React, { useContext } from 'react';
import { Context } from '../index';
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { NavLink } from 'react-router-dom';
import { MAIN_ROUTE } from '../utils/constants';
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    return ( 
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "white", textDecoration: "none"}} to={MAIN_ROUTE}>Тудуду</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"}>Войти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
})

export default NavBar;