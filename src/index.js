import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { actions } from './ducks/counter';
import store from './ducks/store';
store.dispatch(actions.increaseCount(3));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
