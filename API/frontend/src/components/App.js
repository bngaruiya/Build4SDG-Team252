import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Crop CDPA</h1>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'));
