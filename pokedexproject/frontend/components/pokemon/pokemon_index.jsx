import React from 'react';
import PokemonIndexItem from './pokemon_index_item'

class PokemonIndex extends React.Component{
  // constructor(props){
  //   super(props)
  //   this.state = {
  //
  //   }
  // }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const { pokemon } = this.props;
    const pokemonItems = pokemon.map( poke => PokemonIndexItem(poke));


    return (
      <div>
        <ul>
          {pokemonItems}
        </ul>
      </div>
    );
  }
}


export default PokemonIndex;

// {pokemon.map( poke => <li key={poke.id}> <img src={poke.image_url} /><h1>{poke.name}</h1></li>)}
