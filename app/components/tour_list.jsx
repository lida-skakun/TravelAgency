import React from 'react';
import {render} from 'react-dom';
import Tour from './tour'


export default class TourList extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        var toursNodes = this.props.toursData.map(function(tour) {
            return (
                <Tour price={tour.price} key={tour.id} main_foto={tour.main_foto} hotelName={tour.hotelName} feeding={tour.feeding}
                      about={tour.about} where={tour.where} city={tour.city} >
                </Tour>
            );
        });
        return  <div className="tourList">
            {toursNodes}
        </div>;
    }
}