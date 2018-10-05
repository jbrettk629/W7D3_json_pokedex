import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { fetchSinglePokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon, receiveSinglePokemon }  from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchSinglePokemon = fetchSinglePokemon;
  window.receiveSinglePokemon = receiveSinglePokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  ReactDOM.render(<Root store = { store }/>, rootEl);
});
