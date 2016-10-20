import React from 'react';
import {render} from 'react-dom';

export default class Tour extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            {this.props.data}

        </div>
    }


}