import React from 'react';
import Header from '../Partials/Header';
import Sidebar from '../Partials/Sidebar';
import Footer from '../Partials/Footer';
import PropTypes from 'prop-types';

export default class MasterLayout extends React.Component {
  render() {
    return (
      <div className="content-wrap">
        <Header/>
        <Sidebar/>
        <main className="main-container">{childrenWithProps}</main>
        <Footer/>
      </div>
    );
  }
}

MasterLayout.propTypes = {
  children: PropTypes.node
};
