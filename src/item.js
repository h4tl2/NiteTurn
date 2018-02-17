import './App.css';

import React, { Component } from 'react';

import logo from './logo.svg';

var myImg = 'https://resizer.otstatic.com/v2/photos/large/23973264.jpg';
class List extends Component {
  render() {
    return (
        <div className="w3-card-4" style={{ width: '90%', margin: '16px' }} onClick={() => this.props.onClick(this.props.id + 1)}>
            <header className="w3-container w3-light-grey">
                <h3 style={{}}>{this.props.item.name}</h3>
            </header>
            <div className="w3-container" style={{ padding: '8px', backgroundColor: 'white' }}>
                <img src={myImg} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
                <p>{this.props.item.describe}</p>
            </div>
        </div>
    );
  }
}

export default List;