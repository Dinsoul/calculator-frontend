import React, {useState} from 'react';
import {Col, Container, Form, Modal, Row} from "react-bootstrap";
import found from "../logo/foundation.png";
import frame from "../logo/frame.png";
import roof from "../logo/roof.png";
import Table from "./Table";
import back from "../logo/back-button.png";
import CustInf from "./CustInf";
import ClientInf from "./ClientInf";

const ClientCard = () =>{
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [modalShow, setModalShow] = useState(false);
    const oncLick = () => {
        window.location.assign('http://localhost:3000/frame');
    }
    const onCLick = () => {
        window.location.assign('http://localhost:3000/client');
    }


    function NewCalcModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Выбор конструктивного элемента
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="g-5 justify-content-md-center">
                        <Col className="coln">
                            <button className="btnmod"><img src={found}
                                 height="50"
                                 width="50"
                                 className="d-inline-block"
                                 alt="top"/>Фундамент</button>
                        </Col>
                        <Col className="coln">
                    <button className="btnmod" onClick={oncLick}><img src={frame}
                                 height="50"
                                 width="50"
                                 className="d-inline-block"
                                 alt="top"/>Каркас</button>
                        </Col>
                        <Col className="coln">
                    <button className="btnmod"><img src={roof}
                                 height="50"
                                 width="50"
                                 className="d-inline-block"
                                 alt="top"/>Крыша</button>
                        </Col>
                </Row>
                </Modal.Body>
            </Modal>
        );

    }
    return (
        <Container style={{width: '1000px'}}>
            <Row>
                <Col className="col-md-1">
                 <button className="btntab2" onClick={onCLick}><img src={back}
                                             height="50"
                                             width="50"
                                             className="d-inline-block"
                                             alt="top"/></button>
                 </Col>
                <Col>
                    <div className="d-grid d-md-flex">
                        <button className="btncards" onClick={handleShow}><ClientInf/></button>
                    </div>
                </Col>
                <Col className="mt-4"><CustInf /></Col>
             </Row>
            {/*<p className="txt">Имя Фамилия</p>*/}
            {/*<p className="txt">Должность</p>*/}
            <h2 className="head1">Карточка клиента</h2>
            <button className="btnclient" onClick={() => setModalShow(true)}>Создать расчет</button>
            <NewCalcModal show={modalShow}
                          onHide={() => setModalShow(false)}/>
            <Table/>
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
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button className="btnclient" type="submit">
                                Редактировать
                            </button>
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

export default ClientCard;