import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// does not need a mount function because we always want the container to render immediately
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
