import React from 'react';

const Filmes = props => ( 
        <ul>
        {
        props.filmes.map((title, index) => <li key={index}>{title}</li>)
        }
        </ul>
) 

export default Filmes;