import './App.css';

import React, { Component } from 'react';

import Detail from './detail';
import FindFriend from './findFriend';
import List from './list';
import logo from './logo.svg';

var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at pharetra nulla. Suspendisse ligula nisi, elementum mattis ipsum vitae, accumsan dapibus tortor. Curabitur auctor lorem quis viverra posuere. Maecenas sit amet justo lacinia, pharetra quam id, accumsan nisi. Nulla lectus lectus, feugiat ut felis non, lobortis porta dui. Aenean euismod sit amet ex dignissim faucibus. Cras quis vulputate enim. Suspendisse id augue lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse a lacus lorem. Praesent faucibus mattis eros, eu malesuada erat convallis at. Integer velit leo, varius sit amet imperdiet ac, rhoncus ac nisi. Aenean dictum neque id pharetra luctus.';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: 'Dirty',
          describe: [lorem.substr(0, lorem.length/2+1), lorem.substr(lorem.length/2+1)],
        }, {
          name: 'Brick',
          describe: [lorem.substr(0, lorem.length/2+1), lorem.substr(lorem.length/2+1)],
        }
      ]
    }
  }
  render() {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', fontFamily: 'Gill Sans'}}>
        {
          window.location.pathname == '/' && 
          <div>
            <div className="App-header"  
              style={{ 
                // fontSize: '48px', 
                textAlign: 'center',
                paddingTop: '36px', 
                // backgroundColor: 'white',
                // backgroundSize: 'streth',
                color: 'black',
              }}>
              
              <img src={require('./logo.png')} style={{ width: '50%' }}/>
            </div>

            <div className="w3-card-4" style={{ width: '90%', margin: '16px' }} onClick={() => { window.location.assign('/list') }}>
                <header className="w3-container w3-green">
                    <h4>{'Find some place'}</h4>
                </header>
                <div className="w3-container" style={{ backgroundColor: 'white'}}>
                    You can search and ....
                    <img style={{width: '100%'}} src="http://img2.10bestmedia.com/Images/Photos/125095/p-congo-bar-nightlife_54_990x660_201405312051.jpg" />
                    <hr />
                    <p style={{ textAlign: 'center' }} >{'GO'} <span className="glyphicon glyphicon-menu-right"></span></p>
                    
                </div>
            </div>

            <div className="w3-card-4" style={{ width: '90%', margin: '16px' }} onClick={() => { window.location.assign('/find') }}>
                <header className="w3-container w3-orange" >
                    <h4 style={{color:'white'}}>{'Find some friend'}</h4>
                </header>
                <div className="w3-container" style={{ backgroundColor: 'white'}}>
                    <div>fmfmmfmf</div>
                    <img style={{width: '100%'}} src="http://blog.eliteflyers.com/wp-content/uploads/2013/07/Club-goers.jpg" />
                    <hr />
                    <p style={{ textAlign: 'center' }} >{'GO'}<span className="glyphicon glyphicon-menu-right"></span></p>
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