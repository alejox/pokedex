import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {

    const [pokemon , setPokemon] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemon(res.data))
    }, [id])

    console.log(pokemon);

    return (
        <div className="container px-5 pt-5 text-center vh-100 bg-dark text-white">
            <h2 className='text-capitalize'>{pokemon.name}</h2>
            <h2># <b>{id}</b> </h2>
            <img src={pokemon.sprites?.other['official-artwork'].front_default} alt="" className='w-100' />
            <p><b>Type: </b></p>
            <p><b>Weight: </b>{pokemon.weight}</p>
            <h2>Abilities</h2>
            <p>Hp: </p>
            <p>Speed: </p>
            <p>Attack: </p>
            <p>Defense: </p>
        </div>
    );
};


export default PokemonDetail;