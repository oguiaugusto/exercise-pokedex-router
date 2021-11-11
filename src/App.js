import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import pokemons from './data';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import NavBar from './components/NavBar';
import About from './components/About';
import NotFound from './components/NotFound';
import FavoritePokemons from './components/FavoritePokemons';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      favoritePokemons: [],
    }

    this.addFavoritePokemon = this.addFavoritePokemon.bind(this);
    this.removeFavoritePokemon = this.removeFavoritePokemon.bind(this);
  }

  componentDidMount() {
    this.loadFavoritePokemons();
  }

  componentDidUpdate() {
    this.saveFavoritePokemons();
  }

  addFavoritePokemon(pokemon) {
    this.setState((prev) => ({
      favoritePokemons: [...prev.favoritePokemons, pokemon],
    }));
  }
  
  removeFavoritePokemon(pokemon) {
    const { favoritePokemons } = this.state;

    const newFavorites = favoritePokemons.filter((fav) => fav !== pokemon);
    this.setState({
      favoritePokemons: newFavorites,
    })
  }

  saveFavoritePokemons = () => {
    const { favoritePokemons } = this.state;

    localStorage.setItem('favoritePokemons', JSON.stringify(favoritePokemons));
  }

  loadFavoritePokemons = () => {
    const favStr = localStorage.getItem('favoritePokemons');
    const fav = JSON.parse(favStr);

    if (fav) {
      this.setState({ favoritePokemons: fav });
    }
  }

  render() {
    const { addFavoritePokemon, removeFavoritePokemon } = this;
    const { favoritePokemons } = this.state;

    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route
            exact path="/pokemon/:id"
            render={(props) =>
              <PokemonDetails
                { ...props }
                addFavoritePokemon={ addFavoritePokemon }
                removeFavoritePokemon={ removeFavoritePokemon }
                favoritePokemons={ favoritePokemons }
              />
            }
          />
          <Route
            exact path="/"
            render={(props) =>
              <Pokedex { ...props } pokemons={pokemons} favoritePokemons={ favoritePokemons } />
            }
          />
          <Route
            path="/favorite-pokemons"
            render={(props) =>
              <FavoritePokemons { ...props } favoritePokemons={ favoritePokemons } />
            }
          />
          <Route path="/about" component={ About } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
