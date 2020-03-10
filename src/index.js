import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import  'materialize-css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
