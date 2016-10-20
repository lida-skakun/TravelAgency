import React from 'react';
import {render} from 'react-dom';

export default class Select extends React.Component {

    constructor(props) {
        super(props);


    }

    render() {
        return <div>
            <select className="form-control" id={this.props.selector_id} >
                <option>{this.props.option_name1} </option>
                <option>{this.props.option_name2} </option>
                <option>{this.props.option_name3} </option>
                <option>{this.props.option_name4} </option>
            </select>

        </div>
    }
   

}

