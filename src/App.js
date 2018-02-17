import './App.css';

import React, { Component } from 'react';

import Detail from './detail';
import FindFriend from './findFriend';
import List from './list';
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: 'ร้าน1',
        }, {
          name: 'ร้าน2',
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {
          window.location.pathname == '/' && 
          <div>
            <header className="App-header" style={{ fontSize: '36px', textAlign: 'center', paddingTop: '48px' }}>
              NiteTour
            </header>

            <div className="w3-card-4" style={{ width: '90%', margin: '16px' }} onClick={() => { window.location.assign('/list') }}>
                <header className="w3-container w3-light-grey">
                    <h3>{'Find some place'}</h3>
                </header>
                <div className="w3-container">
                    You can search and chakwow
                    <hr />
                    <p style={{ textAlign: 'center' }} >{'Go'}</p>
                </div>
            </div>

            <div className="w3-card-4" style={{ width: '90%', margin: '16px' }} onClick={() => { window.location.assign('/find') }}>
                <header className="w3-container w3-light-grey">
                    <h3>{'Find some friend'}</h3>
                </header>
                <div className="w3-container">
                    You can find someone to YED
                    <hr />
                    <p style={{ textAlign: 'center' }} >{'Go'}</p>
                </div>
            </div>
          </div>
        }
        {
          window.location.pathname == '/list' && <List />
        }
        {
          window.location.pathname.startsWith('/detail') && <Detail location={this.state.list[parseInt(window.location.pathname.substr(8)) - 1]} />
        }
        {
          window.location.pathname.startsWith('/find') && <FindFriend />
        }
      </div>
    );
  }
}

export default App;