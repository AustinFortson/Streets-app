import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom'

console.log("Created by Austin Fortson", '\n', 
            "Portfolio: https://austinfortson.netlify.com/", '\n',
            "LinkedIn: https://www.linkedin.com/in/austin-fortson-916b17170", '\n',
            "GitHub Code: https://github.com/AustinFortson/Streets-app");
ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));


serviceWorker.unregister();
