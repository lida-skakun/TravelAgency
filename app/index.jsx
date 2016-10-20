import React from 'react';
import {render} from 'react-dom';
import Filter from './components/filter';

class App extends React.Component {


    render () {
        return <div>
            <Filter />
            
        </div>;
    }
}



render(<App/>, document.getElementById('content'));