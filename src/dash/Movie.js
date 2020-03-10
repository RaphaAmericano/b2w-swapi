import React from 'react';

class Movie extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return (
            <li>
                <div className="collapsible-header"><i className="material-icons">movie</i>{this.props.movie.title}<i className="material-icons">add</i></div>
                <div className="collapsible-body"><span>{this.props.movie.opening_crawl}</span></div>
            </li>
        )
    }
}
export default Movie;