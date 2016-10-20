import React from 'react';
import {render} from 'react-dom';
import { DropdownButton, MenuItem, Button, Grid, Row, Col, FormControl, FormGroup, ControlLabel, FieldGroup, Checkbox } from 'react-bootstrap';

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
            To: "initial",
            Adults: "initial",
            Children: "initial",
            Duration: "initial",
            Stars: "initial",
            Food: "initial",
            Lowest: "initial",
            Highest: "initial"
        };

    }

    render () {
        return <div>
            <Grid>
                <Row className="show-grid" id="filters">
                    <Col xs={12} sm={5} md={4} lg={4}>
                        <div className="filter_color">
                            <div id="head-filter">
                                <h4>ФИЛЬТРЫ</h4>
                                <hr/>
                            </div>
                            <div id="destination">
                                <FormGroup controlId="formControlsSelect" id="from">
                                    <ControlLabel>Откуда</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select" onClick={this.handleSelectFrom}>
                                        <option value="Киев">Киев</option>
                                        <option value="Запорожье">Запорожье</option>
                                        <option value="Львов">Львов</option>
                                        <option value="Одесса">Одесса</option>
                                    </FormControl>
                                </FormGroup>
                                <FormGroup controlId="formControlsSelect" id="to">
                                    <ControlLabel>Куда</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select" onClick={this.handleSelectTo}>
                                        <option value="Египет">Египет</option>
                                        <option value="Болгария">Болгария</option>
                                        <option value="Турция">Турция</option>
                                        <option value="Тунис">Тунис</option>
                                    </FormControl>
                                </FormGroup>
                                <hr/>
                            </div>
                            <div id="quantiy">
                                <Grid>
                                    <Row className="show-grid" id="filters">
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <FormGroup controlId="formControlsSelect" id="adults">
                                                <ControlLabel>Взрослые</ControlLabel>
                                                <FormControl componentClass="select" placeholder="select" onClick={this.handleSelectAdults}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <FormGroup controlId="formControlsSelect" id="children">
                                                <ControlLabel>Дети</ControlLabel>
                                                <FormControl componentClass="select" placeholder="select" onClick={this.handleSelectChildren}>
                                                    <option value="Нет">Нет</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Grid>  <hr/>
                            </div>
                            <div id="period">
                                Дата начала тура
                                <Grid>
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
                                </Grid>
                                <FormGroup controlId="formControlsSelect" id="duration">
                                    <ControlLabel>Длительность</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select" onClick={this.handleSelectDuration}>
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
                                <FormGroup onClick={this.handleSelectStars}>
                                    <Checkbox inline  id="inlineCheckbox1" value="1">
                                        1
                                    </Checkbox>
                                    {' '}
                                    <Checkbox inline id="inlineCheckbox2" value="2">
                                        2
                                    </Checkbox >
                                    {' '}
                                    <Checkbox inline id="inlineCheckbox3" value="3">
                                        3
                                    </Checkbox>
                                    {' '}
                                    <Checkbox inline id="inlineCheckbox4" value="4">
                                        4
                                    </Checkbox>
                                    {' '}
                                    <Checkbox inline id="inlineCheckbox5" value="5">
                                        5
                                    </Checkbox>
                                </FormGroup>
                                <hr/>
                            </div>
                            <div id="food">
                                Питание
                                <FormGroup onClick={this.handleSelectFood}>
                                    <Checkbox inline  id="foodCheckbox1" value="OB">
                                        OB
                                    </Checkbox>
                                    {' '}
                                    <Checkbox inline id="foodCheckbox2" value="BB">
                                        BB
                                    </Checkbox >
                                    {' '}
                                    <Checkbox inline id="foodCheckbox3" value="HB">
                                        HB
                                    </Checkbox>
                                    {' '}
                                    <Checkbox inline id="foodCheckbox4" value="FB">
                                        FB
                                    </Checkbox>
                                    {' '}
                                    <Checkbox inline id="foodCheckbox5" value="AI">
                                        AI
                                    </Checkbox>
                                    {' '}
                                    <Checkbox inline id="foodCheckbox6" value="UAI">
                                        UAI
                                    </Checkbox>
                                </FormGroup>
                                <hr/>
                            </div>
                            <div id="cost">
                                Стоимость, $ <br/>
                                <Grid>
                                    <Row className="show-grid" id="filters">
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <label htmlFor="lowest">От </label><input id="lowest" type="number" min="0" step="10" onInput={this.handleSelectLowest}/>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <label htmlFor="highest">до </label><input id="highest" type="number" min="0" step="10" onChange={this.handleSelectHighest}/>
                                        </Col>
                                    </Row>
                                </Grid>
                                <hr/>
                            </div>
                            <Button bsStyle="primary" id="apply" onClick={this.handleButtonClick}>ПРМЕНИТЬ ФИЛЬТРЫ </Button>
                        </div>
                    </Col>
                </Row>
            </Grid>
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
        this.state.Stars = evt.target.value;
    }

    handleSelectFood(evt) {
        this.state.Food = evt.target.value;
    }

    handleSelectLowest(evt) {
        this.state.Lowest = evt.target.value;
    }

    handleSelectHighest(evt) {
        this.state.Highest = evt.target.value;
    }

    handleButtonClick() {
        alert(this.state.From + this.state.To + this.state.Adults + this.state.Children + this.state.Duration + this.state.Stars + this.state.Food + this.state.Lowest + this.state.Highest);

    }
}
# IntelliJ IDEA
    .idea/
*.iml
*.ipr
*.iws

# Eclipse
    .settings/
.classpath
    .project

# nodejs
node
node_modules/
**/bundle.js
**/bundle.js.map
    .npm-debug.log

.logs
    .gitignore

