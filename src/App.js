import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Filmes from './Filmes';

class App extends Component {

  

  constructor(props) {
    super(props);
    this.state = {
      dados: [],
      filmes: []
    }
    // this.loadPlanet();
  }

  loadPlanet = () => {
    let numberPlanet = Math.floor(Math.random() * 61) + 1;
    axios.get('https://swapi.co/api/planets/'+numberPlanet)
      .then(res => {
        const planeta = res.data;
        const filmes = this.loadFilms(res.data.films);
        this.loadFilms(res.data.films);
        this.setState( { dados: planeta } );
        this.setState( { filmes: filmes } );
      });
  }

  loadFilms(arr){
    let retorno = [];
    for(let i = 0; i < arr.length; i++){
      axios.get(arr[i])
        .then(res => {
          retorno.push(res.data);
        })
    }
    console.log(retorno);
    return retorno;
  }

  onChange = (event) => {
    this.setState({teste: event.target.value})
  }

  render() {

    return (
      <div className="App">
        <h1>{this.state.dados.name}</h1>
        <h2>Population: {this.state.dados.population}</h2>
        <h3>Climate: {this.state.dados.climate}</h3>
        <h4>Terrain: {this.state.dados.terrain}</h4>
        <h5>Featured in films</h5>
        
        <button onClick={this.loadPlanet}>Next</button>
      </div>
    );
  }
}

export default App;
