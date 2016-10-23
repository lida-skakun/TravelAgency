import React from 'react';
import {render} from 'react-dom';
import {FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

export default class Selector extends React.Component {

    constructor(props) {
        super(props);


    }

    render() {
        return <div>
            <FormGroup controlId="formControlsSelect" id={this.props.selector_id}>
                <ControlLabel>{this.props.title}</ControlLabel>
                <FormControl componentClass="select"  placeholder="select" onClick={this.props.function}>
                    <option value={this.props.value1}>{this.props.name1}</option>
                    <option value={this.props.value2}>{this.props.name2}</option>
                    <option value={this.props.value3}>{this.props.name3}</option>
                    <option value={this.props.value4}>{this.props.name4}</option>
                </FormControl>
            </FormGroup>
        </div>
    }
   

}

