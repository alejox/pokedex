import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';


const Pokedex = () => {

    const pokemon = useSelector((state) => state.pokemon);
    const [pokemonSearch, setPokemonSearch] = useState("");
    const [pokemons, setPokemons] = useState([]);
    const navigate = useNavigate();
    const [types, setType] = useState([]);

    useEffect(() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126')
        .then(res => setPokemons(res.data.results));

        axios.get(`https://pokeapi.co/api/v2/type/`)
        .then(res => setType(res.data.results));
    }, []);


    const search = ()=> {
        navigate(`/pokedex/${pokemonSearch}`);
    };

    const filterPokemons = e => {
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon));
    };


    return (
        <div className={'bg-dark text-center pt-5'}>
            <h2 className='text-white'>Pokedex</h2>
            <p className='text-white'>Bienvenido {pokemon}!</p>
            <label className='text-white' htmlFor="select">Type:</label>
            <select id='select' onChange={filterPokemons} className='m-3'>
                <option></option>
                {
                    types.map(type => (
                        
                        <option 
                        key={type.name}
                        value={type.url}>{type.name}</option>
                    ))
                }
            </select>
            <div className="search-box">
                <input 
                type="text" 
                value={pokemonSearch} 
                onChange={e => setPokemonSearch(e.target.value)}
                placeholder="Buscar pokemon"
                />
                <button className="btn btn-primary" onClick={search}>
                    Buscar
                </button>
            </div>
        <div className="d-flex flex-wrap">
            {
                pokemons.map(pokemon => (
                    <PokemonCard 
                    key={pokemon.url !== undefined ? pokemon.url :  pokemon.pokemon.url} 
                    pokemonUrl={pokemon.url !== undefined ? pokemon.url :  pokemon.pokemon.url}
                    />
                ))
            }
        </div>
        </div>
    );
};


export default Pokedex;

