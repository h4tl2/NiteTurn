import './App.css';

import React, { Component } from 'react';

import logo from './logo.svg';

class List extends Component {
  render() {
    return (
        <div className="w3-card-4" style={{ width: '90%', margin: '16px' }} onClick={() => this.props.onClick(this.props.id + 1)}>
            <header className="w3-container w3-light-grey">
                <h3>{this.props.item.name}</h3>
            </header>
            <div className="w3-container">
                <img src="img_avatar3.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
                <p>{this.props.item.describe}</p>
            </div>
        </div>
    );
  }
}

export default List;