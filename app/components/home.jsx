import React from 'react';
import {render} from 'react-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import styles from '../../styles/home.css';


export default class Home extends React.Component {
    render () {
        return <div id="Home">
            <h1>О НАС</h1>
            <div className="general">
                <div id="general-container">
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <div id="main-text">
                                <h3>Наши преимущества:</h3>
                                <Row >
                                    <Col xs={4} sm={4} md={4} lg={4} id="leftCell">
                                        <img src="img/gl117.png"className="img-responsive" id="img-cell"/>
                                        <p className="advantages">Предлагаем туры во все уголки мира</p>
                                    </Col>
                                    <Col xs={4} sm={4} md={4} lg={4} id="rightCell">
                                        <img src="img/hotel.png"className="img-responsive" id="img-cell"/>
                                        <p className="advantages">Туры только в проверенные отели и туры</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={4} sm={4} md={4} lg={4} id="leftCell">
                                        <img src="img/checkmark.png" className="img-responsive" id="img-cell"/>
                                        <p className="advantages">Работаем только надежными операторами</p>
                                    </Col>
                                    <Col xs={4} sm={4} md={4} lg={4} id="rightCell">
                                        <img src="img/alarm.png" className="img-responsive" id="img-cell"/>
                                        <div className="advantages">Мы на связи 24/7</div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={4} sm={4} md={4} lg={4} id="leftCell">
                                        <img src="img/tag.png" className="img-responsive" id="img-cell"/>
                                        <p className="advantages">Наши цены вас приятно удивлят</p>
                                    </Col>
                                    <Col xs={4} sm={4} md={4} lg={4} id="rightCell">
                                        <img src="img/sale48.png" className="img-responsive" id="img-cell"/>
                                        <p className="advantages">Дисконтная бонусно - накопительная система</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>;
    }
}
