import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var element = React.createElement('h1', { className: 'greeting' }, 'welcome to react');
ReactDOM.render(element, document.getElementById('root'));


