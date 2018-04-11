import React from 'react';

export default class Footer extends React.Component {
  render() {
    const copyRight = `© ${(new Date()).getFullYear()}`;
    return (
      <footer className='footer'>
        <span className="copy-right">{copyRight}</span>
      </footer>
    );
  }
}
