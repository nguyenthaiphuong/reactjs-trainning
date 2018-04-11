import React, {Component} from 'react';
import Header from './header';
import Nav from  './nav';
import SessionOne  from '../about/session-one';
import SessionTwo  from '../about/session-two';
import Footer from './footer';

export default class App extends Component {
  render() {
    return(
      <div id="page-wrap">
        <header id="header" className="header">
          <Header/>
          <Nav/>
        </header>
        <SessionOne/>
        <SessionTwo/>
        <Footer/>
      </div>
    );
  }
}
