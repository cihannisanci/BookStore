import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import Home from './components/common/HomePage';
import About from './components/common/AboutPage';
import App from './components/App';
import Book from './components/book/BookPage';

ReactDOM.render((

  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/about' component={About} />
      <Route path='/books' component={Book} />
    </Route>
  </Router>
), document.getElementById('app'));