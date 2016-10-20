import React from 'react';
import {render} from 'react-dom';
import {DropdownButton, MenuItem, Button} from 'react-bootstrap';

export default class MyDropdown extends React.Component {
    constructor() {
        super();
        this.handleSelectAgeFrom = this.handleSelectAgeFrom.bind(this);
        this.handleSelectAgeTo = this.handleSelectAgeTo.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state = {
            ageFrom: "initial",
            ageTo: "initial"
        };
    }

    render () {
        return <div>
            <DropdownButton bsStyle="primary" title="AgeFrom" onSelect={this.handleSelectAgeFrom}>
                <MenuItem eventKey="10">10</MenuItem>
                <MenuItem eventKey="20">20</MenuItem>
                <MenuItem eventKey="30" active>30</MenuItem>
                <MenuItem eventKey="40">40</MenuItem>
            </DropdownButton>
            <DropdownButton bsStyle="primary" title="AgeTo" onSelect={this.handleSelectAgeTo}>
                <MenuItem eventKey="10">10</MenuItem>
                <MenuItem eventKey="20">20</MenuItem>
                <MenuItem eventKey="30" active>30</MenuItem>
                <MenuItem eventKey="40">40</MenuItem>
            </DropdownButton>

            <Button
                bsStyle="primary"
                onClick={this.handleButtonClick}>
                Some button
            </Button>
        </div>;
    }

    handleSelectAgeFrom(evt) {
        this.state.ageFrom = evt;
    }

    handleSelectAgeTo(evt) {
        this.state.ageTo = evt;
    }

    handleButtonClick(evt) {
        alert("Age from " + this.state.ageFrom + "age to" + this.state.ageTo);
    }
}