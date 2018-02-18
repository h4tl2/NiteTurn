import './App.css';

import React, { Component } from 'react';

import Item from './item';
import axios from 'axios';
import logo from './logo.svg';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
          url: 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/26167231_10204018919469648_3248634021043474935_n.jpg?oh=8d5b23d5a848787f703d204b05ac00cc&oe=5B1EE262',
          last: 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/26167231_10204018919469648_3248634021043474935_n.jpg?oh=8d5b23d5a848787f703d204b05ac00cc&oe=5B1EE262',
        }
        this.changeImg = this.changeImg.bind(this);
    }

    componentDidMount() {

    }

    changeImg(isLiked) {
      let myBody;
      if(isLiked) {
        myBody = {
          url: this.state.url
        };
      } else {
        myBody = {
          url: this.state.last
        }
      }
      axios.post('https://sista-recommender-api.herokuapp.com/api', myBody).then((data) => {
        console.log(data);
        this.setState({
          url: data.data.result,
          last: isLiked ? this.state.url : this.state.last
        })
      }, (error) => {
        console.log('error');
      });
    }
  render() {
    return (
      <div className="w3-card-4 w3-dark-grey" style={{ width: '90%', margin: '16px' }}>
        <div className="w3-container w3-center">
            <h3>Find Friend</h3>
            <img src={this.state.url} alt="Avatar" style={{ width: '80%' }} />
            <h5>Some one</h5>

            <div className="w3-section">
                <button type="button" className="btn btn-success" onClick={() => this.changeImg(true)}>Bottom Up</button>
                <button type="button" className="btn btn-danger " onClick={() => this.changeImg(false)}>Stay Still</button>
            </div>
        </div>
      </div>
    );
  }
}

export default List;