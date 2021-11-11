import React from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data';

class FavoritePokemons extends React.Component {
  render() {
    const { favoritePokemons } = this.props;
    const favorites = pokemons.filter((pokemon) =>
      favoritePokemons.includes(pokemon.id.toString()));


    return (
      <div className="favorite-pokemons">
        <h1>Favorite Pokemons</h1>
        <div className="favorite-pokemons-container">
          {favorites.map((pokemon) => {
            const { id } = pokemon;

            return (
              <Pokemon
                key={ id }
                pokemon={ pokemon }
                favoritePokemons={ favoritePokemons }
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default FavoritePokemons;
