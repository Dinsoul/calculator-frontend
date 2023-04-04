import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import copy from "../logo/copy.png";
import deleted from "../logo/deleted.png";
import {useEffect, useState} from "react";
import axios from "axios";

const Table = () => {
    const [dates, setDates] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        axios.get(apiUrl).then((resp) => {
            const allData = resp.data;
            setDates(allData);
            console.log(allData)
        });
    }, [setDates]);

    const deleteData = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        setDates(
            dates.filter((data) => {
                return data.id !== id;
            })
        );
    };

    return (
            <Container style={{width:'1000px'}}>
                <Row className="gx-3 gy-3 m-md-0">
                    {dates.map((data) => (
                        <>
                        <Col className="col-2">
                            <button className="btntable">Расчёт {data.id}</button>
                        </Col>
                        <Col className="col-2">
                           <p className="labtab">{data.username}</p>
                        </Col>
                        <Col className="col-3">
                            <select className="btntable2">
                                <option value="1">Актуален</option>
                                <option value="2">Не актуален</option>
                                <option value="3">Договор заключен</option>
                            </select>
                        </Col>
                        <Col className="col-3">
                            <p className="labtab">{data.email}</p>
                        </Col>
                        <Col className="col-1">
                            <button className="btntabcad"><img src={copy}
                                                               height="30"
                                                               width="30"
                                                               alt="top"/>
                            </button>
                        </Col>
                        <Col className="col-1">
                            <button className="btntabcad" onClick={() => deleteData(data.id)}><img src={deleted}
                                                               height="30"
                                                               width="30"
                                                               className="d-inline"
                                                               alt="top"/>
                            </button>
                        </Col>
                        </>
                    ))}
                </Row>
            </Container>
        );

}

export default Table;