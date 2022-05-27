import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCArd from './PokemonCArd';


const Pokedex = () => {

    const pokemon = useSelector((state) => state.pokemon);

    const [pokemons, setPokemons] = useState([])
    useEffect(() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126')
        .then(res => setPokemons(res.data.results))
    }, []);

    console.log(pokemons);

    return (
        <div>
            <h2>Pokedex</h2>
            <p>Bienvenido {pokemon}!</p>
            {
                pokemons.map(pokemon => (
                    <PokemonCArd pokemonName={pokemon.name} />
                ))
            }
        </div>
    );
};

export default Pokedex;

