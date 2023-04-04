import React, {Component} from 'react';
import {Form, Container} from "react-bootstrap";
import '../App.css'

const Formaf = () => {

    const onclick = () => {
        window.location.assign('http://localhost:3000/client');
    }

    return (
            <>
                <Container style={{width:'500px'}}>
                <Form>
                    <Form.Group className="label1" controlId="formBasicEmail">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control className="" type="email" placeholder="Введите ваш логин" />
                    </Form.Group>

                    <Form.Group className="label2" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль" />
                    </Form.Group>
                    <button className="button1" onClick={onclick}>Войти</button>
                </Form>
                </Container>
            </>
    );

}

export default Formaf;