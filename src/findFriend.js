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
      <div className="w3-card-4 w3-dark-grey" style={{ width: '90%', margin: '16px' }}>
        <div className="w3-container w3-center">
            <h3>Find Friend (with benefit)</h3>
            <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Avatar" style={{ width: '80%' }} />
            <h5>John Doe</h5>

            <div className="w3-section">
                <button className="w3-button w3-green">Like</button>
                <button className="w3-button w3-red">KUY</button>
            </div>
        </div>
      </div>
    );
  }
}

export default List;