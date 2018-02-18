import './App.css';
import React, { Component } from 'react';
import logo from "./logo.svg";
import profile from './profile.jpg';
import imageResult from './img18.jpg';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import axios from "axios";
import ShowingPic from "./showingPic"


class FindPic extends Component{
    constructor () {
        super()
        this.state = {
          isHidden: true
        }
      }
    state = {
        selectedOption: '',
        
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption: selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }
    
    findPictureClick = event =>{
        const config = {
            headers: {
                'Ocp-Apim-Subscription-Key': '706f7d6d7d7e4b008fff69868e9c3e89',
                'Content-Type':'application/json'
            }
        };

        const req_body = {    
            "faceId":"7b377288-a9c9-4c3e-a5f9-8635b0a1b59b",
            "faceListId":"thay_valen",  
            "maxNumOfCandidatesReturned":3,
            "mode": "matchFace"
        }
        
        axios.post(`https://southeastasia.api.cognitive.microsoft.com/face/v1.0/findsimilars`, req_body,config)
        .then(res => {
            console.log(res.data);
        })
        this.setState({
            isHidden: !this.state.isHidden
          })



    }
    render(){
     const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
        return(
            
            <section className="hero is-fullheight is-default is-bold is-light">
                <div className="hero-head">
                    <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                        <a className="navbar-item" href="../">
                            <img src={logo} alt="Logo"/>
                        </a>
                        
                        </div>
                        
                    </div>
                    </nav>
                </div>
                    <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns is-vcentered">
                            <div className="column is-5">
                                <figure className="image is-4by3">
                                <img src={profile} alt="Description"/>
                                </figure>
                            </div>
                        <div className="column is-6 is-offset-1">
                            <h1 className="title is-2">
                            Choose the album
                            </h1>
                            <h2 className="subtitle is-4">
                            make sure that your profile picture is actually your face.
                            </h2>
                            
                            <div className="column">
                                <Select
                                    name="form-field-name"
                                    value={value}
                                    onChange={this.handleChange}
                                    options={[
                                    { value: 'Thay, Valentines NightOut', label: 'Thay, Valentines NightOut' },
                                    { value: 'Onyx, Black Valentine', label: 'Onyx,Black Valentine' },
                                    ]}
                                />
                            </div>
                            <p className="has-text-centered">
                            
                            <a className="button is-medium is-dark" onClick={() => this.findPictureClick()}>
                                FIND!
                            </a>
                            </p>
                        </div>
                        </div>
                        
                        
                        {!this.state.isHidden && <ShowingPic />}
                        
                    </div>
                    </div>
                    
                   
                    <div className="hero-foot">
                    <div className="container">
                        <div className="tabs is-centered">
                        <ul>
                            <li><a>Powered with love by Azure</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FindPic;