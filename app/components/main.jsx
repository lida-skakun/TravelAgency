import React from 'react';
import {render} from 'react-dom';
import Filter from './filter';
import TourList from './tour_list';
import {Grid, Row, Col} from 'react-bootstrap';
import styles from '../../styles/main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handlerFilterSubmit = this.handlerFilterSubmit.bind(this);
    }

    render () {

        return <div>
            <h1>ВЫБОР ТУРА</h1>
            <div id="options">
                <div id="hotels">
                    <div id="tourTable">
                        <Row className="show-grid">
                            <Col xs={12} sm={5} md={4} lg={4} id="filters">
                                <Filter submitHandler={this.handlerFilterSubmit} />
                            </Col>
                            <Col xs={12} sm={6} md={7} lg={7} id="result">
                                <TourList toursData={this.props.toursData}/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>;
    }

    handlerFilterSubmit(obj) {
        this.filterData = obj;
        
    }

}



