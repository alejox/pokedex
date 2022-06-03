import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({pokemonUrl}) => {

    const [pokemon, setPokemon] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(pokemonUrl)
            .then(res => setPokemon(res.data))
    },[pokemonUrl])


    return (
        <div className="col-sm-6 col-md-4 col-lg-3 p-3">
        <div className="card h-100" onClick={() => navigate(`/pokemondetail/${pokemon.id}`)}>
            <div className="card-body">
                <h3>{pokemon.name}</h3>
                <img src={pokemon.sprites?.other['official-artwork'].front_default} alt="" className='w-100' />
            </div>
        </div>
        </div>
    );
};

export default PokemonCard;