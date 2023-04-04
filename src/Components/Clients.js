import React, {useEffect, useState} from 'react';
import {Col, Container, Form, Modal, Row} from "react-bootstrap";
import axios from 'axios';
import CustInf from "./CustInf";
import back from "../logo/back-button.png";

 const Clients = () => {
     const [show, setShow] = useState(false);
     const handleShow = () => setShow(true);
     const handleClose = () => setShow(false);
     const onclick = () => {
         window.location.assign('http://localhost:3000/cards');
     }

     const onCLIck = () => {
         window.location.assign('http://localhost:3000/');
     }
     const [persons, setPersons] = useState([]);

     useEffect(() => {
         const apiUrl = 'https://jsonplaceholder.typicode.com/users';
         axios.get(apiUrl).then((resp) => {
             const allPersons = resp.data;
             setPersons(allPersons);
             console.log(allPersons)
         });
     }, [setPersons]);


     return (
         <Container style={{width: '1000px'}}>
             <Row>
                 <Col>
                     <button className="btntab2" onClick={onCLIck}><img src={back}
                                                                        height="50"
                                                                        width="50"
                                                                        className="d-inline-block"
                                                                        alt="top"/></button>
                 </Col>
                 <Col className="mt-4">
                     <CustInf />
                 </Col>
             </Row>
             {/*<p className="txt">Имя Фамилия</p>*/}
             {/*<p className="txt">Должность</p>*/}
             <h2 className="head1">Клиенты</h2>
             <button className="btnclient" onClick={handleShow}>Создать клиента</button>
             <Row xs={1} md={3} className="gx-5 gy-4">
                 {persons.map((person) => (
                     <Col>
                         <button className="btnclient1" onClick={onclick}>{person.name}</button>
                     </Col>
                 ))}
             </Row>
             <Modal show={show} onHide={handleClose}>
                 <Modal.Header closeButton>
                 </Modal.Header>
                 <Modal.Body>
                     <Form>
                         <Form.Group className="mb-3" controlId="formSurname">
                             <Form.Label className="label3">Фамилия</Form.Label>
                             <Form.Control className="label3" type="text" placeholder="Введите вашу фамилию"/>
                         </Form.Group>
                         <Form.Group className="mb-3" controlId="formName">
                             <Form.Label className="label3">Имя</Form.Label>
                             <Form.Control className="label3" type="text" placeholder="Введите ваше имя"/>
                         </Form.Group>
                         <Form.Group className="mb-3" controlId="formFatherName">
                             <Form.Label className="label3">Отчество</Form.Label>
                             <Form.Control className="label3" type="text" placeholder="Введите ваше отчество"/>
                         </Form.Group>
                         <Form.Group className="mb-3" controlId="formPhone">
                             <Form.Label className="label3">Телефон</Form.Label>
                             <Form.Control className="label3" type="tel" placeholder="Введите ваш номер телефона"/>
                         </Form.Group>
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Label className="label3">Email</Form.Label>
                             <Form.Control className="label3" type="email" placeholder="Введите ваш email"/>
                         </Form.Group>
                         <Form.Group className="mb-3" controlId="formAddress">
                             <Form.Label className="label3">Адрес</Form.Label>
                             <Form.Control className="label3" type="text" placeholder="Введите ваш адрес проживания"/>
                         </Form.Group>
                         <div className="d-grid d-md-flex justify-content-md-end">
                             <button className="btnclient" type="submit">
                                 Сохранить
                             </button>
                         </div>
                     </Form>
                 </Modal.Body>
             </Modal>
         </Container>

     );
 }

export default Clients;