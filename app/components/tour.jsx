import React from 'react';
import {render} from 'react-dom';

export default class Tour extends React.Component {

    constructor(props) {
        super(props);
       
    }

    render() {
        return <div>
            <h1>
                {this.props.data}
            </h1>
        </div>
    }

   

}
