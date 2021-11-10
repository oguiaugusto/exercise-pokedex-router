import React from 'react';
import '../about.css';

class About extends React.Component {
  render() { 
    return (
      <div className="pokedex-about">
        <h1>O que é uma Pokédex?</h1>
        <img src="https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png" alt="Pokedex" />
        <section className="pokedex-about-section">
          <p>
            Pokédex é uma enciclopédia digital
            criada pelo <b>Professor Oak</b> como uma
            ferramenta inestimável para treinadores
            no mundo de Pokemons. Ela fornece informações
            sobre todos os pokemons registrados no banco
            de dados, embora seja diferente a forma com que
            as informações apareçam em diferentes mídias.
          </p>
          <p>
            Entretanto, elas só são entregues a alguns
            treinadores de uma vez, normalmente, àqueles que
            aparentam ter potencial e habilidades excepcionais.
          </p>
          <p>
            <b>Pokédexes Regionais</b> dão informações sobre
            pokemons nativos de uma região em particular,
            enquanto as <b>Pokédexes Nacionais</b> guardam
            informações sobre todos os pokemons conhecidos.
          </p>
        </section>
      </div>
    );
  }
}
 
export default About;
