import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store=createStore(rootReducer,applyMiddleware(logger));

ReactDOM.render((
  <BrowserRouter>
 <Provider store={store}>

    <App />
    
    
</Provider>
</BrowserRouter>
  ), document.getElementById('root')
  );