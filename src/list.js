import './App.css';

import React, { Component } from 'react';

import Item from './item';
import logo from './logo.svg';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    name: 'Dirty',
                    describe: 'something',
                }, {
                    name: 'Brick',
                    describe: 'something',
                }
            ],
        }
    }

    onLocationClick(num) {
        window.location.assign(`detail/${num}`)
    }
  render() {
    return (
      <div>
        <div style={{ margin: '32px', textAlign: 'Left !important', fontSize: '28px' }}>
            <h1 className="App-title">Location</h1>
        </div>
        {this.state.list.map((item, idx) => <Item id={idx} item={item} onClick={this.onLocationClick} />)}
      </div>
    );
  }
}

export default List;