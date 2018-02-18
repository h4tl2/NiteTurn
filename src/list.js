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
                    name: 'DEMO',
                    describe: 'Arena 10, Thonglor Soi 10, Sukhumvit, 10110 Bangkok Tel.085-250-2000',
                }, {
                    name: 'ONYX',
                    describe: 'Soi Soonvijai, Rama 9 Road, 10310 Bangkok Tel.081-645-1188',
                }
            ],
        }
    }
    onBackClick(num) {
        window.location.assign(`/`)
    }

    onLocationClick(num) {
        window.location.assign(`detail/${num}`)
    }
  render() {
    return (
      <div style={{  margin: '0px',backgroundColor:'white'}}>
        <div style={{color: 'green', textAlign:'left', fontSize: '20px', padding: '10px 0 0 10px'}} onClick={this.onBackClick}>{"< Back"}</div>
        <div style={{ padding: '16px 32px 8px 20px', textAlign: 'left !important', fontSize: '28px' }}>
            <h1 className="App-title" style={{fontWeight: 'bold',fontFamily: 'Gill Sans' }}>
                <span className="glyphicon glyphicon-map-marker" style={{padding: '0 10px 0 0', color:'red'}}/>
                Location
            </h1>
        </div>
        {this.state.list.map((item, idx) => <Item id={idx} item={item} onClick={this.onLocationClick} />)}
      </div>
    );
  }
}

export default List;