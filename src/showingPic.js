import './App.css';
import React, { Component } from 'react';
import imageResult from './img18.jpg';

class ShowingPic extends Component{
    render(){
        return(
            <div className="column is-half is-offset-one-quarter" >
                <figure className="image is-4by3">
                    <img src={imageResult} alt="Placeholder image"/>
                </figure>
                        
            </div>
        );
    }
}

export default ShowingPic;