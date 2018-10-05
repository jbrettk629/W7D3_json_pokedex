import React from 'react';
import { Link } from 'react-router-dom';


const PokemonIndexItem = ( props ) => (
  <li key={props.id} >
    <Link to="/pokemon/:pokemon_id">
      <img src={props.image_url} />
      <h1>{props.name}</h1>
    </Link>
  </li>

);

export default PokemonIndexItem;
