import React from 'react';
import {render} from 'react-dom';
import Home from './components/home';
import Main from './components/main';
import Countries from './components/countries';
import Advisor from './components/advisor';
import Location from './components/location';

class App extends React.Component {

    render () {
        return <div>
            <Main />
            <Home />
            <Countries />
            <Advisor />
            <Location />
        </div>;
    }

}


render(<App/>, document.getElementById('content'));