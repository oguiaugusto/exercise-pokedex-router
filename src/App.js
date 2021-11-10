import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact path="/"
            render={(props) =>
              <Pokedex { ...props } pokemons={pokemons} />
            }
          />
          <Route
            exact path="/pokemon/:id"
            render={(props) =>
              <PokemonDetails { ...props } />
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
