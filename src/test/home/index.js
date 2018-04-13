import React, {Component} from 'react';
import About from './home';

export default class Text extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <About/>
      </div>
    );
  }
}
