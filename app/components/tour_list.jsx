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
                <Tour tourData={tour}>
                </Tour>
            );
        });
        return  <div className="tourList">
            {toursNodes}
        </div>;
    }
}