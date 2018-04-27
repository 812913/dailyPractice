// const greeter = require('./Greeter.js');
// document.querySelector("#root").appendChild(greeter());

// const React=require("react");
// const ReactDOM=require("react-dom");

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';
render(<Greeter />, document.getElementById('root'));

