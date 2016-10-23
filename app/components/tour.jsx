import React from 'react';
import {render} from 'react-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import styles from '../../styles/tour.css';

export default class Tour extends React.Component {

    constructor(props) {
        super(props);
       
    }

    render() {

        return <div className>
                <Row className="show-grid" id="resultTour">
                    <div className="price">{this.props.price}$</div>
                    <div className="main_foto">{this.props.main_foto}</div>
                    <div className="hotelName">{this.props.hotelName}</div>
                    <div className="whereCity"> <strong>Расположение:</strong> {this.props.where}, {this.props.city}</div>
                    <div></div>
                    <div className="feedingInHotel"> Питание: {this.props.feeding}</div>
                    <div className="about_hotel">{this.props.about}</div>
                    <div className="details">ПОДРОБНЕЕ</div>
                </Row>
        </div>
    }
}
