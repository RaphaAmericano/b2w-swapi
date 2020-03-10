import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import M from 'materialize-css';
class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            films: []
        }
    }

    componentDidMount(){
        if(this.props.planeta.films.length > 0 ){
            for(let i = 0; i < this.props.planeta.films.length; i++){
                axios.get(this.props.planeta.films[i]).then( 
                    (film) => {
                        this.setState({ films:[ ...this.state.films, film.data]});
                    }
                ).catch(
                    (err) => {}
                );
            }
            
        }
        
    }

    componentDidUpdate(){
        let elements = document.querySelectorAll('.collapsible');
        let options = {};
        let instances = M.Collapsible.init(elements, options);
    }

    render(){
        const films = this.state.films.map((film, i) => {
            return <Movie movie={film} key={i} ></Movie>
        });

        return(
            <div className="card-content">
                <h1>{this.props.planeta.name}</h1>
                <div className="divider"></div>
                <h3>Population: {this.props.planeta.population}</h3>
                <h3>Climate: {this.props.planeta.climate}</h3>
                <h4>Terrain: {this.props.planeta.terrain}</h4>     
                    { films.length > 0 ? <h5>Featured in films</h5> : null }
                    { films.length > 0 ? <ul className="collapsible popout">{ films }</ul> : null }
            </div>        
        )
    }
}
export default Card;