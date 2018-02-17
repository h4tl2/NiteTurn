import './App.css';

import React, { Component } from 'react';

import Item from './item';
import logo from './logo.svg';

class List extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div>
        <div style={{ margin: '32px', textAlign: 'Left !important', fontSize: '28px' }}>
            <h1 className="App-title">{this.props.location.name}</h1>
        </div>
        
      </div>
    );
  }
}

export default List;