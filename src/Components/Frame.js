import {Col, Container, Form, Row} from "react-bootstrap";
import React from 'react';
import back from "../logo/back-button.png";
import CustInf from "./CustInf";
import ClientInf from "./ClientInf";

const Frame = () => {
    const onclick = () => {
        window.location.assign('http://localhost:3000/cards');
    }
    return(
      <Container style={{width:'1000px'}}>
          <Row>
              <Col className="col-md-1">
          <button className="btntab2" onClick={onclick}><img src={back}
                                           height="50"
                                           width="50"
                                           className="d-inline-block"
                                           alt="top"/></button>
          </Col>
              <Col className="col-md-2 mt-4"><ClientInf/></Col>
              <Col className="mt-4"><CustInf/></Col>
          </Row>
          {/*<p className="txt">Имя Фамилия</p>*/}
          {/*<p className="txt">Должность</p>*/}
          <h2 className="head1">Каркас</h2>
          <Row className="rowfr">
              <Col lg={10}>
              <Form.Control className="label1" type="text" placeholder="Добавить адрес строительства объекта"/>
              </Col>
              <Col lg={2}>
                  <button className="btnfr">Сохранить</button>
              </Col>
          </Row>
          <h5 className="head2">Исходные данные</h5>
          <Form>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Количество этажей</Form.Label>
                  <Col>
                      <Form.Control type="number"/>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Высота этажа</Form.Label>
                  <Col>
                  <Form.Control type="text"/>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Периметр внешних стен</Form.Label>
                  <Col>
                  <Form.Control type="number"/>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Площадь основания</Form.Label>
                  <Col>
                  <Form.Control type="number"/>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Толщина внешних стен</Form.Label>
                  <Col>
                      <select className="form-select">
                          <option selected></option>
                          <option value="1">100</option>
                          <option value="2">150</option>
                          <option value="3">200</option>
                          <option value="4">250</option>
                      </select>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Длина внутринних стен</Form.Label>
                  <Col>
                  <Form.Control type="number"/>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Толщина внутренних стен</Form.Label>
                  <Col>
                      <select className="form-select">
                          <option selected></option>
                          <option value="1">100</option>
                          <option value="2">150</option>
                          <option value="3">200</option>
                          <option value="4">250</option>
                      </select>
                  </Col>
              </Form.Group>
          </Form>
          <h5 className="head2">Обшивка внешних стен</h5>
          <Form>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">ОСБ</Form.Label>
                  <Col>
                  <select className="form-select">
                      <option selected></option>
                      <option value="1">OSB 9 мм</option>
                      <option value="2">OSB 10 мм</option>
                      <option value="3">OSB 15 мм</option>
                      <option value="4">OSB 18 мм</option>
                  </select>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Парогидроизоляция</Form.Label>
                  <Col>
                  <select className="form-select">
                      <option selected></option>
                      <option value="1">Ондотус</option>
                      <option value="2">Пароизоляция Axton (b)</option>
                      <option value="3">Пароизоляционная пленка Ютафол Н 96 Сильвер</option>
                      <option value="4">Пароизоляция В</option>
                  </select>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Ветрозащита</Form.Label>
                  <Col>
                  <select className="form-select">
                      <option selected></option>
                      <option value="1">Ветро-влагозащитная мембрана Brane А</option>
                      <option value="2">Паропроницаемая ветро-влагозащита A Optima</option>
                      <option value="3">Гидро-ветрозащита Тип А</option>
                  </select>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Утеплитель</Form.Label>
                  <Col>
                  <select className="form-select">
                      <option selected></option>
                      <option value="1">Кнауф ТеплоКнауф 100 мм</option>
                      <option value="2">Технониколь 100 мм</option>
                      <option value="3">Эковер 100 мм</option>
                      <option value="4">Эковер 150 мм</option>
                      <option value="5">Эковер 200 мм</option>
                      <option value="6">Фасад 200 мм</option>
                      <option value="7">Эковер 250 мм</option>
                  </select>
                  </Col>
              </Form.Group>
          </Form>
          <h5 className="head2">Оконные проемы</h5>
          <Form>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Высота</Form.Label>
                  <Col>
                  <Form.Control type="text"/>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Ширина</Form.Label>
                  <Col>
                  <Form.Control type="text"/>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Количество</Form.Label>
                  <Col>
                  <Form.Control type="text"/>
                  </Col>
              </Form.Group>
          </Form>
          <h5 className="head2">Дверные проемы внешние</h5>
          <Form>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Высота</Form.Label>
                  <Col>
                  <Form.Control type="text"/>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Ширина</Form.Label>
                  <Col>
                  <Form.Control type="text"/>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Количество</Form.Label>
                  <Col>
                  <Form.Control type="text"/>
                  </Col>
              </Form.Group>
          </Form>
          <h5 className="head2">Дверные проемы внутренние</h5>
          <Form>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Высота</Form.Label>
                  <Col>
                  <Form.Control type="text"/>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Ширина</Form.Label>
                  <Col>
                  <Form.Control type="text"/>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Количество</Form.Label>
                  <Col>
                  <Form.Control type="text"/>
                  </Col>
              </Form.Group>
          </Form>
          <h5 className="head2">Перекрытия</h5>
          <Form>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Толщина перекрытия</Form.Label>
                  <Col>
                      <select className="form-select">
                          <option selected></option>
                          <option value="1">200</option>
                          <option value="2">250</option>
                      </select>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">ОСБ</Form.Label>
                  <Col>
                      <select className="form-select">
                          <option selected></option>
                          <option value="1">OSB 9 мм</option>
                          <option value="2">OSB 10 мм</option>
                          <option value="3">OSB 15 мм</option>
                          <option value="4">OSB 18 мм</option>
                      </select>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Парогидроизоляция</Form.Label>
                  <Col>
                      <select className="form-select">
                          <option selected></option>
                          <option value="1">Ондотус</option>
                          <option value="2">Пароизоляция Axton (b)</option>
                          <option value="3">Пароизоляционная пленка Ютафол Н 96 Сильвер</option>
                          <option value="4">Пароизоляция В</option>
                      </select>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Ветрозащита</Form.Label>
                  <Col>
                      <select className="form-select">
                          <option selected></option>
                          <option value="1">Ветро-влагозащитная мембрана Brane А</option>
                          <option value="2">Паропроницаемая ветро-влагозащита A Optima</option>
                          <option value="3">Гидро-ветрозащита Тип А</option>
                      </select>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4} className="label1">Утеплитель</Form.Label>
                  <Col>
                      <select className="form-select">
                          <option selected></option>
                          <option value="1">Кнауф ТеплоКнауф 100 мм</option>
                          <option value="2">Технониколь 100 мм</option>
                          <option value="3">Эковер 100 мм</option>
                          <option value="4">Эковер 150 мм</option>
                          <option value="5">Эковер 200 мм</option>
                          <option value="6">Фасад 200 мм</option>
                          <option value="7">Эковер 250 мм</option>
                      </select>
                  </Col>
              </Form.Group>
          </Form>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btnclient">Очистить</button>
              <button className="btnclient">Рассчитать</button>
          </div>
      </Container>
    );
}
export default Frame;