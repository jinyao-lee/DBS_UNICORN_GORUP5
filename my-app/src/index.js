import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import C3Chart from 'react-c3js';
import 'c3/c3.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

var typicalPay = 700;
var distribution = [
    [0.3, 0.1, 0.25, 0.35],
    [0.3, 0.1, 0.35, 0.25],
    [0.3, 0.4, 0.2, 0.1]
];

var ageGroup = 1;

var chart = {
        // iris data from R
        columns: [
            ['Food', typicalPay*distribution[ageGroup][0]],
            ['Leisure', typicalPay*distribution[ageGroup][1]],
            ['Transport', typicalPay*distribution[ageGroup][2]],
            ['Savings', typicalPay*distribution[ageGroup][3]]
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
};


const data = {
  columns: [
    ['data1', 30, 200, 100, 400, 150, 250],
    ['data2', 50, 20, 10, 40, 15, 25]
  ]
};
 
const mountNode = document.getElementById('root');

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<C3Chart data={chart} />, mountNode);
