import React from 'react';
import {render} from 'react-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import styles from '../../styles/tour.css';

export default class Tour extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
                <Row className="show-grid" id="resultTour">
                    <div className="price">{this.props.toursData.price}$</div>
                    <div className="main_foto">{this.props.toursData.main_foto}</div>
                    <div className="hotelName">{this.props.toursData.hotelName}</div>
                    <div className="whereCity"> <strong>Расположение:</strong> {this.props.toursData.where}, {this.props.toursData.city}</div>
                    <div></div>
                    <div className="feedingInHotel"> Питание: {this.props.toursData.feeding}</div>
                    <div className="about_hotel">{this.props.toursData.about}</div>
                    <div className="details">ПОДРОБНЕЕ</div>
                </Row>
        </div>
    }



}
