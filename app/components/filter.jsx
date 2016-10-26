import React from 'react';
import {render} from 'react-dom';
import { DropdownButton, MenuItem, Button, Grid, Row, Col, FormControl, FormGroup, ControlLabel, FieldGroup, Checkbox } from 'react-bootstrap';
import Selector from './MySelectors/selector'
import styles from '../../styles/filter.css';

export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectFrom = this.handleSelectFrom.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleSelectTo = this.handleSelectTo.bind(this);
        this.handleSelectAdults = this.handleSelectAdults.bind(this);
        this.handleSelectChildren = this.handleSelectChildren.bind(this);
        this.handleSelectDuration = this.handleSelectDuration.bind(this);
        this.handleSelectStars = this.handleSelectStars.bind(this);
        this.handleSelectFood = this.handleSelectFood.bind(this);
        this.handleSelectLowest = this.handleSelectLowest.bind(this);
        this.handleSelectHighest = this.handleSelectHighest.bind(this);
        this.state = {
            From: "initial",
            To: "Египет",
            Adults: "2",
            Children: "Нет",
            Duration: "2",
            Stars: [],
            Food: [],
            Lowest: "0",
            Highest: "initial"
        };

    }

    render () {
        return <div>
                <div className="filter_color">
                    <div id="head-filter">
                        <h4>ФИЛЬТРЫ</h4>
                        <hr/>
                    </div>
                    <div id="destination">
                        <Selector selector_id="from" title="Откуда" function={this.handleSelectFrom}
                                  value1="Киев" name1="Киев"
                                  value2="Запорожье" name2="Запорожье"
                                  value3="Львов" name3="Львов"
                                  value4="Одесса" name4="Одесса" />
                        <Selector selector_id="to" title="Куда" function={this.handleSelectTo}
                                  value1="Египет" name1="Египет"
                                  value2="Болгария" name2="Болгария"
                                  value3="Турция" name3="Турция"
                                  value4="Тунис" name4="Тунис" />
                        <hr/>
                    </div>
                    <div id="quantiy">
                            <Row className="show-grid">
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <Selector selector_id="adults" title="Взрослые" function={this.handleSelectAdults}
                                              value1="2" name1="2"
                                              value2="1" name2="1"
                                              value3="3" name3="3"
                                              value4="4" name4="4" />
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <Selector selector_id="children" title="Дети" function={this.handleSelectChildren}
                                              value1="Нет" name1="Нет"
                                              value2="1" name2="1"
                                              value3="2" name3="2"
                                              value4="3" name4="3" />
                                </Col>
                            </Row>
                          <hr/>
                    </div>
                    <div id="period">
                        Дата начала тура
                        <Row className="show-grid">
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <label htmlFor="from">C</label><br/>
                                <input id="from_date" type="date"/>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <label htmlFor="to">по</label><br/>
                                <input id="to_date" type="date"/>
                            </Col>
                        </Row>
                        <FormGroup controlId="formControlsSelect" id="duration">
                            <ControlLabel>Длительность</ControlLabel>
                            <FormControl componentClass="select"  placeholder="select" onClick={this.handleSelectDuration}>
                                <option value="2-3 дня">2-3 дня</option>
                                <option value="4-5 дней">4-5 дней</option>
                                <option value="6-7 дней">6-7 дней</option>
                                <option value="8-9 дней">8-9 дней</option>
                                <option value="10-11 дней">10-11 дней</option>
                                <option value="12-13 дней">12-13 дней</option>
                                <option value="14-15 дней">14-15 дней</option>
                                <option value="16-17 дней">16-17 дней</option>
                                <option value="18-19 дней">18-19 дней</option>
                                <option value="20-21 дней">20-21 дней</option>
                                <option value="22-23 дней">22-23 дней</option>
                                <option value="24-25 дней">24-25 дней</option>
                                <option value="26-27 дней">26-27 дней</option>
                                <option value="28-29 дней">28-29 дней</option>
                            </FormControl>
                        </FormGroup>
                        <hr/>
                    </div>
                    <div id="stars">
                        Категория отеля
                        <FormGroup onChange={this.handleSelectStars}>
                            <Checkbox inline  id="inlineCheckbox1" value="1">
                                1
                            </Checkbox>
                            <Checkbox inline id="inlineCheckbox2" value="2">
                                2
                            </Checkbox >
                            <Checkbox inline id="inlineCheckbox3" value="3">
                                3
                            </Checkbox>
                            <Checkbox inline id="inlineCheckbox4" value="4">
                                4
                            </Checkbox>
                            <Checkbox inline id="inlineCheckbox5" value="5">
                                5
                            </Checkbox>
                        </FormGroup>
                        <hr/>
                    </div>
                    <div id="food">
                        Питание
                        <FormGroup onChange={this.handleSelectFood}>
                            <Checkbox inline  id="foodCheckbox1" value="OB">
                                OB
                            </Checkbox>
                            <Checkbox inline id="foodCheckbox2" value="BB">
                                BB
                            </Checkbox >
                            <Checkbox inline id="foodCheckbox3" value="HB">
                                HB
                            </Checkbox>
                            <Checkbox inline id="foodCheckbox4" value="FB">
                                FB
                            </Checkbox>
                            <Checkbox inline id="foodCheckbox5" value="AI">
                                AI
                            </Checkbox>
                            <Checkbox inline id="foodCheckbox6" value="UAI">
                                UAI
                            </Checkbox>
                        </FormGroup>
                        <hr/>
                    </div>
                    <div id="cost">
                        Стоимость, $ <br/>
                        <Row className="show-grid" >
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <label htmlFor="lowest">От </label><input id="lowest" type="number" min="0" step="10" onInput={this.handleSelectLowest}/>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <label htmlFor="highest">до </label><input id="highest" type="number" min="0" step="10" onChange={this.handleSelectHighest}/>
                            </Col>
                        </Row>
                        <hr/>
                    </div>
                    <Button id="apply" onClick={this.handleButtonClick}>ПРМЕНИТЬ ФИЛЬТРЫ </Button>
                </div>
        </div>;
    }

    handleSelectFrom(evt) {
        this.state.From = evt.target.value;
    }

    handleSelectTo(evt) {
        this.state.To = evt.target.value;
    }

    handleSelectAdults(evt) {
        this.state.Adults = evt.target.value;
    }

    handleSelectChildren(evt) {
        this.state.Children = evt.target.value;
    }

    handleSelectDuration(evt) {
        this.state.Duration = evt.target.value;
    }

    handleSelectStars(evt) {
        if (!this.state.Stars.includes(evt.target.value)) {
            this.state.Stars.push(evt.target.value);
        } else {
            var number = this.state.Stars.indexOf(evt.target.value);
            this.state.Stars.splice(number, 1);
        }
    }

    handleSelectFood(evt) {
        if (!this.state.Food.includes(evt.target.value)) {
            this.state.Food.push(evt.target.value);
        } else {
            var number = this.state.Food.indexOf(evt.target.value);
            this.state.Food.splice(number, 1);
        }
    }

    handleSelectLowest(evt) {
        this.state.Lowest = evt.target.value;
    }

    handleSelectHighest(evt) {
        this.state.Highest = evt.target.value;
    }

    handleButtonClick() {
        this.props.submitHandler(this.state);
    }
}



