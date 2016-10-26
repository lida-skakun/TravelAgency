import React from 'react';
import {render} from 'react-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import styles from '../../styles/location.css';


export default class Location extends React.Component {
    constructor(props) {
        super(props);
        this.clickToOpen = this.clickToOpen.bind(this);
        this.clickToClose = this.clickToClose.bind(this);
    }

    render() {
        return <div id="Location">
                    <h2>ГДЕ НАС НАЙТИ</h2>
                    <section id="info">
                        <h6 className="blue"><strong>НАШ ТЕЛЕФОН</strong></h6>
                        <p><strong>Продажи & Консалтинг</strong> </p>
                            <p className="blue">+38(044) 444-44-44 <sup>*</sup> </p>
                            <p><sup>*</sup> c ПН по ПТ с 09:00 по 19:00 <br/>
                            в выходные и праздничные дни с 10:00 по 17:00 </p>
                        <div className="address">
                            <p id="lookOnMap" onClick={this.clickToOpen}><strong>НАЙТИ НАС НА КАРТЕ</strong></p>
                            <p id="closeTheMap" onClick={this.clickToClose} className="inv-map"><strong>Спрятать карту</strong></p>
                            <div id="map" className="inv-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9917347.245036006!2d24.219903795242825!3d47.065032828600955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LI!5e0!3m2!1suk!2sua!4v1475607015954" width="100%" height="500"></iframe>
                             </div>
                        </div>
                        <h6 className="blue"><strong>НАПИСАТЬ НАМ НА ПОЧТУ</strong> </h6>
                        <form>
                            <div className="form-group">
                                <label htmlFor="InputEmail1">Напишите ваш електронный адрес:</label>
                                <input type="email" className="form-control" id="InputEmail1" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputText">Напишите сообщение нам</label>
                                <textarea className="form-control" id="InputText" rows="6"></textarea>
                            </div>
                                <input className="btn btn-warning" type="submit" value="Отправить"/>
                        </form>
                    </section>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} id="footer_row">
                            <footer>
                                © 2016 FLY WITH US |
                                KUNSKA@GMAIL.COM |
                                ALL RIGHTS RESERVED.
                            </footer>
                        </Col>
                    </Row>
        </div>;
    }
    clickToOpen() {
        map.setAttribute("class", "toShow");
        closeTheMap.setAttribute("class", "toShow");
        lookOnMap.setAttribute("class", "inv-map");
    }

    clickToClose() {
        map.setAttribute("class", "inv-map");
        closeTheMap.setAttribute("class", "inv-map");
        lookOnMap.setAttribute("class", "toShow");
    }
}