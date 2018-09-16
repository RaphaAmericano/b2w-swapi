import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      planeta: [],
      filmes: [],
      possuiFilmes: false
    }
  }

  loadPlanet = () => {
    let numberPlanet = Math.floor(Math.random() * 61) + 1;
    this.setState({ filmes: [] } );
    axios.get('https://swapi.co/api/planets/'+numberPlanet)
      .then(res => {
        let filmes = res.data.films;
        console.log(filmes);
        this.setState( { planeta: res.data } );
        
        if(filmes.length > 0 ){
          this.setState( { possuiFilmes: true } );
        } else {
          this.setState( { possuiFilmes: false } );
        }

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
    const itens = this.state.filmes.map( (filme, i) => 
        <li className="collection-item" key={i}>{filme}</li>    
    );
    let lista;
    if(this.state.possuiFilmes){
    lista = (
      <ul className="collection with-header">
        <li className="collection-header"><h5>Featured in films</h5></li>
        {itens}
      </ul>
    )
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col s10">
            <div className="card">
              <div className="card-content">
                <h1>{this.state.planeta.name}</h1>
                <div className="divider"></div>
                <h3>Population: {this.state.planeta.population}</h3>
                <h3>Climate: {this.state.planeta.climate}</h3>
                <h4>Terrain: {this.state.planeta.terrain}</h4>
          
                  
                    {lista}
                  
          
                
                <div className="card-action">
                  <button className="waves-light btn center-align" onClick={this.loadPlanet}>Next</button>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
