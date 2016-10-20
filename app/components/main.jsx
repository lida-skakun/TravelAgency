import React from 'react';
import {render} from 'react-dom';
import Filter from './filter';
import Tour from './tour';


export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handlerFilterSubmit = this.handlerFilterSubmit.bind(this);
        this.data = {
            from: "Киев",
            to: "Египет",
            adults: "2"
        }

    }


    render () {
        return <div>
            <Filter submitHandler={this.handlerFilterSubmit} />
            <Tour data={this.data.from}/>
        </div>;
    }

    handlerFilterSubmit(obj) {
        this.filterResult = obj;
        alert(this.filterResult.From);
    }

}



