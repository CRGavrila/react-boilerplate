import React, { Component } from 'react';

import './hello.page.scss';

export default class HelloPage extends Component {
  static displayName = 'HelloPage';
  
  render() {
    return (
      <div>
        <span className="HelloSpan">Hello</span>
      </div>
    )
  }
}
