import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import About from './test/about/about';
import React, {Component} from 'react';
import Contact from './test/contact/contact';
import Home from './test/home/home';
import { BrowserRouter } from 'react-router-dom';
// import routes from 'routes';
// import {AppRoot} from 'components/Application';
// import store from 'store';
class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', ()=> {
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  }

  render() {
    var Child;
    switch (this.state.route) {
       case '/about': Child = About; break;
       case '/contact': Child = Contact; break;
       default: Child = About;
     }
     return (
       <div>
          <Child/>
       </div>
     );
  }
}

ReactDOM.render (
  (<BrowserRouter>
    <Home/>
  </BrowserRouter>),
  document.getElementById('app'),
);
