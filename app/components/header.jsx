import React from 'react';
import {render} from 'react-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import styles from '../../styles/header.css';


export default class Header extends React.Component {
    render() {
        return <div id="Header">
            <Row>
                <Col xs={12} sm={5} md={4} lg={4}>
                    <img id="logo" className="img-responsive" src="img/Primary_logo_on_transparent_259x75.png"/>
                </Col>
                <Col xs={8} sm={4} md={5} lg={5} id="header">
                    <div id="phone">
                        Зарезервировать тур <br/>
                        +38(044) 444-44-44 <sup>*</sup>
                    </div>
                    <sup>*</sup> c ПН по ПТ с 09:00 по 19:00 <br/>
                    в выходные и праздничные дни с 10:00 по 17:00
                </Col>
                <Col xs={4} sm={2} md={3} lg={3}>
                    <img id="callback" className="img-responsive" src="img/hotesse.jpg"/>
                </Col>
            </Row>
            <div id="nav-row">
                <nav>
                    <ul>
                        <li><a href="index.html#Tour" title="tour"> ВЫБОР ТУРА </a></li>
                        <li><a href="index.html#Main" title="main"> О НАС </a></li>
                        <li><a href="index.html#Countries" title="countries"> СТРАНЫ </a></li>
                        <li><a href="index.html#Advisor" title="advisor"> СОВЕТЫ ТУРИСТУ </a></li>
                        <li><a href="index.html#Location" title="location"> ГДЕ НАС НАЙТИ </a></li>
                    </ul>
                </nav>
            </div>
        </div>;
    }
}