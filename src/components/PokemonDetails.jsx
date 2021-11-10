import React, { Component } from 'react';
import pokemons from '../data';

class PokemonDetails extends Component {
  render() {
    const { id } = this.props.match.params;

    const pokemon = pokemons.find((poke) => poke.id === parseInt(id));
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
      moreInfo,
      foundAt,
    } = pokemon;

    return (
      <div className="pokemon-details">
        <img
          src={ image }
          alt={ name }
          className="pokemon-img"
        />
        <p className="pokemon-info">
          <span>{ name }</span>
          <span> | </span>
          <span>{ type }</span>
          <span> | </span>
          <span>{ `${value} ${measurementUnit}` }</span>
        </p>
        <p className="pokemon-more-info">
          <a
            href={ moreInfo }
            rel="noopener nofollow noreferrer"
            target="_blank"
          >
            Click here for more info
          </a>
        </p>
        <div className="pokemon-maps">
          {foundAt.map((place, index) => {
            const { location, map } = place;
            return (
              <div className="pokemon-map" key={ `map${index}` }>
                <p>{ location }</p>
                <img src={ map } alt={ location } />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PokemonDetails;
