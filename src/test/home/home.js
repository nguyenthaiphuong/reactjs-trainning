import React, {Component} from 'react';
import Header from '../common/header';
import Nav from  '../common/nav';
import Footer from '../common/footer';

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [
      'red', 'green', 'blue'
      ]
    };
  }

  setStyle = (color) => {
    return {
      backgroundColor : color
    };
  }

  render() {
    let elements = this.state.color.map((color, index) => {
      return <button className='btn btn-lg' style={this.setStyle(color)}> </button>
    });

    return (
      <div id="page-wrap">
        <header>
          <Nav/>
        </header>
        <div className='container'>
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              {elements}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
