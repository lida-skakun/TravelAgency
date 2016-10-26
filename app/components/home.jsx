import React from 'react';
import {render} from 'react-dom';
import styles from '../../styles/main.css';


export default class Main extends React.Component {
    render () {
        return <div id="Main">
            <h1>О НАС</h1>
            <div className="general">
                <div className="container-fluide" id="general-container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                            <div className="container-fluide" id="main-text">
                                <h3>Наши преимущества:</h3>
                                <div className="row">
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="leftCell">
                                        <img src="img/gl117.png"className="img-responsive" id="img-cell"/>
                                        <p className="advantages">Предлагаем туры во все уголки мира</p>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="rightCell">
                                        <img src="img/hotel.png"className="img-responsive" id="img-cell"/>
                                        <p className="advantages">Туры только в проверенные отели и туры</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="leftCell">
                                        <img src="img/checkmark.png" className="img-responsive" id="img-cell"/>
                                        <p className="advantages">Работаем только надежными операторами</p>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="rightCell">
                                        <img src="img/alarm.png" className="img-responsive" id="img-cell"/>
                                        <div className="advantages">Мы на связи 24/7</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="leftCell">
                                        <img src="img/tag.png" className="img-responsive" id="img-cell"/>
                                        <p className="advantages">Наши цены вас приятно удивлят</p>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="rightCell">
                                        <img src="img/sale48.png" className="img-responsive" id="img-cell"/>
                                        <p className="advantages">Дисконтная бонусно - накопительная система</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-0 col-sm-0 col-md-5 col-lg-5">
                            <div className="slide">
                                <ul className="bxslider" >
                                    <li><img  src="img/9e8f75a5ec22fb35d966afb84453015d.jpg"/></li>
                                    <li><img  src="img/bef7e062da34bd6597f18591d7186515.jpg"/></li>
                                    <li><img  src="img/discount2015.png" /></li>
                                    <li><img  src="img/potovanje_shutterstock_214023157.jpg" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
