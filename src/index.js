import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import store from 'store';
import routes from 'routes';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import About from './test/about/about';
import Contact from './test/contact/contact';
import Index from './test/home/index';
import {AppRoot} from 'components/Application';

ReactDOM.render (
  <AppRoot store={store} routes={routes}/>,
  document.getElementById('app')
);
