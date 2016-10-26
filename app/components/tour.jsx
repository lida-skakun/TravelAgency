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
                    <div className="price">{this.props.tourData.costOfTour}$</div>
                    <div className="main_foto"><img src={this.props.tourData.main_foto}/></div>
                    <div className="hotelName">{this.props.tourData.hotelName}</div>
                    <div className="whereCity"> <strong>Расположение:</strong> {this.props.tourData.where}, {this.props.tourData.city}</div>
                    <div></div>
                    <div className="feedingInHotel"> Питание: {this.props.tourData.feeding}</div>
                    <div className="about_hotel">{this.props.tourData.about}</div>
                    <div className="details">ПОДРОБНЕЕ</div>
                </Row>
        </div>
    }



}
