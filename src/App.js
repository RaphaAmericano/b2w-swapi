import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Card from './dash/Card.js';
import Loader from './common/Loader.js';
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      planeta:[],
      carregando: true
    }
  }

  loadPlanet = () => {
    this.setState( { carregando : true });
    let numberPlanet = Math.floor(Math.random() * 100);    
    axios.get('https://swapi.co/api/planets/'+numberPlanet)
      .then(res => {
        this.setState( { planeta: res.data } );
        this.setState( { carregando : false });
        
      }).catch(() => {
        this.loadPlanet()
      } );
  }

  componentDidMount(){
    this.loadPlanet(); 
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s10">
            <div className="card">
              { this.state.carregando ? <Loader></Loader> : <Card planeta={this.state.planeta}></Card>}
              
              <div className="card-action">
                  <button className="waves-light btn center-align" onClick={this.loadPlanet}>Next</button>
                </div>
            </div>
            
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
