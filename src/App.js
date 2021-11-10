import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import pokemons from './data';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import NavBar from './components/NavBar';
import About from './components/About';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route
            exact path="/pokemon/:id"
            render={(props) =>
              <PokemonDetails { ...props } />
            }
          />
          <Route
            exact path="/"
            render={(props) =>
              <Pokedex { ...props } pokemons={pokemons} />
            }
          />
          <Route path="/about" component={ About } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
