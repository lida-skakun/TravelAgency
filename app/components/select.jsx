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

<Select selector_id="from"
        option_name1="Киев"
        option_name2="Запорожье"
        option_name3="Львов"
        option_name4="Одесса" />