import React from 'react';
import ReactDOM from '@hot-loader/react-dom';
import { render } from 'react-dom';
import { App } from './components';


if (process.env.NODE_ENV === 'development' && module.hot) {
    ReactDOM.render(<App />, document.getElementById('root'));
}else {
    render(<App />, document.getElementById('root'));
}
