import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx';
import registerServiceWorker from './registerServiceWorker';

var element = React.createElement('h1', {className: 'greeting' }, 'Hello, Bob!');
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();