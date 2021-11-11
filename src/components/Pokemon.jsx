import React from 'react';
import { Link } from 'react-router-dom';
import '../pokemon.css';

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight, image, id} = this.props.pokemon;
    const { favoritePokemons } = this.props;
    let backgroundClass = 'pokemon';

    if (favoritePokemons && favoritePokemons.includes(id.toString())) backgroundClass = 'pokemon favorite';

    return (
      <div className={ backgroundClass }>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <div>
          <Link to={`/pokemon/${id}`}>
            <img src={image} alt={`${name} sprite`} />
            <p className="pokemon-img-more-info">Click for more info</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Pokemon;