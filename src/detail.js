import './App.css';

import React, { Component } from 'react';

import Item from './item';
import logo from './logo.svg';

class List extends Component {
    constructor(props) {
        super(props);
    }
    onBackClick() {
        window.location.assign(`/list`)
    }
  render() {
    return (
      <div>
        <div style={{ padding: '16px 32px 16px 24px', textAlign: 'Left !important', fontSize: '28px', backgroundColor: '#44225e', color: 'white'}}>
            <span className="glyphicon glyphicon-chevron-left" style={{paddingRight: '16px'}} onClick={this.onBackClick}></span>
            <h1 className="App-title" style={{ display: 'inline' }}>     
                {this.props.location.name}
            </h1>
        </div>
        <p style={{ margin: '16px' }}>
            {this.props.location.describe[0]}
        </p>
        <p style={{ margin: '16px' }}>
            {this.props.location.describe[1]}
        </p>
        <img 
            src="https://img02.siam2nite.com/wnYAI5AEt8tceFhz8H6koa9imWk=/450x301/smart/pictures/17995/s2n_0002_p1auhu4rj44mq3o51pnu140n1i034.jpg"
            style={{ padding: '16px', width: '100%',float: 'center' }}
        />
      </div>
    );
  }
}

export default List;    