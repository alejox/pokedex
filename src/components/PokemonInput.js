import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changePokemon } from '../store/slices/pokemon.slice';
import {useDispatch} from 'react-redux';


const PokemonInput = () => {

    const [pokemonName, setPokemonName] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const getName = () => {
        dispatch(changePokemon(pokemonName))
        navigate("/Pokedex");
    }



    return (
        <div className={'bg-dark vh-100 text-center text-white'}>
            <h1 className={'pt-5'}>Pokedex</h1>
            <img src="" alt="" />
            <input type="text" value={pokemonName} onChange={e => setPokemonName(e.target.value)} placeholder="Trainer name" className='rounded-lg'/>
            <button onClick={getName}>Enviar</button>
        </div>
    );
};

export default PokemonInput;