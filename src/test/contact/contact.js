import React, {Component} from 'react';
import Header from '../common/header';
import Nav from  '../common/nav';
import SessionOne  from './session-one';
import SessionTwo  from './session-two';
import Footer from '../common/footer';

export default class Contact extends Component {
  render() {
    return (
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
