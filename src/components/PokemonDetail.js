import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {

    const [pokemon , setPokemon] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemon(res.data))
    }, [])

    console.log(pokemon);

    return (
        <div>
            <h2>Pokemon Detail</h2>
            <p>Accediendo al personaje con id: <b>{id}</b> </p>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" className='w-100' />
        </div>
    );
};

export default PokemonDetail;