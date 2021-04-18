import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Life from './pages/dome/Life';
import Router from './router'
import Admin from './admin';
import configureStore from './redux/store/configureStore'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

const store = configureStore();
ReactDom.render(
    <Provider store={store}>
        <Router/>
    </Provider>,
    
    document.getElementById('root')
);
registerServiceWorker();