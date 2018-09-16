import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      planeta: [],
      filmes: []
    }
    
  }

  loadPlanet = () => {
    let numberPlanet = Math.floor(Math.random() * 61) + 1;
   
    let retorno = [];
    axios.get('https://swapi.co/api/planets/'+1)
      .then(res => {
        let filmes = res.data.films;
        this.setState( { planeta: res.data } );
        for(let i = 0; i < filmes.length; i++){
          axios.get(filmes[i])
            .then(res => {
              let filme = res.data.title;  
              this.setState(prev => ({ filmes: [...prev.filmes, filme] }) );
          }).catch(err => console.log(err));
        } 
      });
  }

  componentDidMount(){
    this.loadPlanet(); 
  }

  render() {
    //let teste = [ 'joao', 'jose', 'maria', 'marcos'];
    // const testeLista = teste.map(pessoa => <li>{pessoa}</li>);
    //let info = this.state.filmes;
    const lista = this.state.filmes.map( filme => <li>{filme}</li>);
    //console.log(teste);
    //console.log(info);
    
    return (
      <div className="App">
        <h1>{this.state.planeta.name}</h1>
        <h2>Population: {this.state.planeta.population}</h2>
        <h3>Climate: {this.state.planeta.climate}</h3>
        <h4>Terrain: {this.state.planeta.terrain}</h4>
        <h5>Featured in films</h5>
        <ul>{lista}</ul>
        <button onClick={this.loadPlanet}>Next</button>
      </div>
    );
  }
}

export default App;
