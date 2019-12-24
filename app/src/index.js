import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StateInspector} from 'reinspect';

const AppWrap = () => {
    return (
        <StateInspector>
            <App/>
        </StateInspector>
    )
}


ReactDOM.render(<AppWrap />, document.getElementById('root'));
