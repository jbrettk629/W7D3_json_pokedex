import {RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions.js';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {

    switch(action.type){
      case RECEIVE_ALL_POKEMON:
        return merge({}, state, action.pokemon);
      case RECEIVE_SINGLE_POKEMON:
        return merge({}, state, action.pokemon);
      default:
        return state;
    }
};


export default pokemonReducer;