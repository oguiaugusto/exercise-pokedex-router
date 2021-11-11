import React, { Component } from 'react';
import pokemons from '../data';

class PokemonDetails extends Component {
  constructor() {
    super();

    this.state = {
      favorited: false,
    }

    this.checkFavorite = this.checkFavorite.bind(this);
    this.favorite = this.favorite.bind(this);
  }

  componentDidMount() {
    const { favoritePokemons } = this.props;
    const { id } = this.props.match.params;

    if (favoritePokemons.includes(id)) {
      this.favorite();
    }
  }

  favorite() {
    this.setState({
      favorited: true,
    })
  }

  checkFavorite() {
    const { addFavoritePokemon, removeFavoritePokemon } = this.props;
    const { favorited } = this.state;
    const { id } = this.props.match.params;
    
    if (!favorited) {
      addFavoritePokemon(id);
      this.setState({ favorited: true });
    } else {
      removeFavoritePokemon(id);
      this.setState({ favorited: false });
    }
  }

  render() {
    const { id } = this.props.match.params;
    const { favorited } = this.state;
    const { checkFavorite } = this;

    const pokemon = pokemons.find((poke) => poke.id === parseInt(id));
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
      moreInfo,
      foundAt,
    } = pokemon;

    const addFavorite = <button type="button" onClick={ checkFavorite }>Add To Favorite</button>
    const rmFavorite = <button type="button" onClick={ checkFavorite }>Remove from Favorite</button>

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
        <div className="pokemon-favorite-check">
          {favorited ? rmFavorite : addFavorite}
        </div>
      </div>
    );
  }
}

export default PokemonDetails;
