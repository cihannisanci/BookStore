// Set up your application entry point here...
import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import Home from './components/common/HomePage';
import About from './components/common/AboutPage';
import App from './components/App';
import Book from './components/book/BookPage';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/about' component={About} />
        <Route path='/books' component={Book} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));