import './App.css';

import React, { Component } from 'react';

import Detail from './detail';
import FindFriend from './findFriend';
import List from './list';
import FindPic from './findPic'

import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: 'DEMO',
          describe: ["DEMO is an EDM powerhouse club located in the heart of Arena 10 along Thonglor Soi 10. Often playing big room, progressive, and trap the club’s décor reminds visitors of a garage or an underground warehouse that has been converted into a large party space. The industrial feel of the club makes it the perfect place to escape to when the glitz and glam of Bangkok starts to feel too much. The venue also features a small outdoor veranda for revelers to hang out at as well as one of Bangkok’s top hip-hop rooms called “Dirty Bar”", "A club within a club. Expect a different vibe, more catered towards your hip-hop heads here, but expect the same trendy crowd who are all there to party. Expect the team at DEMO to keep the venue interesting as over the years multiple improvements to the space have consistently happened to improve the overall visitor experience."],
        }, {
          name: 'ONYX',
          describe: ["ONYX opened up in 2014 in RCA and by 2017 the club made it onto DJ Mag’s Top 100 Clubs list, coming in at number 92 – the only Bangkok club to have ever placed on the list. The EDM-only club boasts large LED screens, piercing lasers, confetti canons, smoke machines, and crazy lighting. In addition, ONYX utilizes the KUVO by Pioneer system to allow anyone, anywhere with the app to get real-time information about what is playing inside the club. ", "The two-tiered club has a capacity of 2000 people, a threshold which they regularly max out, and has a large dancefloor as well as two designated VIP zones which cater to those looking to ball out on bottle service on the night. The appeal of the club is evident from the fact that superstar DJs like Steve Aoki, The Chainsmokers, and Showtek to name a few, have often made ONYX their destination of choice to woo the very international crowd of young beautiful people."],
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
                    <h4 style={{fontFamily: 'Gill Sans' }}>{'Place for you'}</h4>
                </header>
                <div className="w3-container" style={{ backgroundColor: 'white'}}>
                    Seize the night, cuz we own the night!
                    <img style={{width: '100%'}} src="http://img2.10bestmedia.com/Images/Photos/125095/p-congo-bar-nightlife_54_990x660_201405312051.jpg" />
                    <hr />
                    <p style={{ textAlign: 'center' }} >{'GO'} <span className="glyphicon glyphicon-menu-right"></span></p>
                    
                </div>
            </div>

            <div className="w3-card-4" style={{ width: '90%', margin: '16px' }} onClick={() => { window.location.assign('/find') }}>
                <header className="w3-container w3-orange" >
                    <h4 style={{color:'white',fontFamily: 'Gill Sans'}}>{'The more, The merrier '}</h4>
                </header>
                <div className="w3-container" style={{ backgroundColor: 'white'}}>
                    <div>More people = More fun</div>
                    <img style={{width: '100%'}} src="http://blog.eliteflyers.com/wp-content/uploads/2013/07/Club-goers.jpg" />
                    <hr />
                    <p style={{ textAlign: 'center' }} >{'GO'}<span className="glyphicon glyphicon-menu-right"></span></p>
                </div>
            </div>

            <div className="w3-card-4" style={{ width: '90%', margin: '16px' }} onClick={() => { window.location.assign('/pic') }}>
                <header className="w3-container w3-light-grey">
                    <h4 style={{fontFamily: 'Gill Sans' }}>{'Find your precious memory'}</h4>
                </header>
                <div className="w3-container">
                    Because some memories never fade.
                    <img style={{width: '100%'}} src="https://pbs.twimg.com/media/DFbvko0XYAEk-6_.jpg" />
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
        {
          window.location.pathname.startsWith('/pic') && <FindPic />
        }
      </div>
    );
  }
}

export default App;