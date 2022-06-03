import {HashRouter,  Routes,  Route} from 'react-router-dom'
import './App.css';
import Pokedex from './components/Pokedex';
import PokemonDetail from './components/PokemonDetail';
import ProtectedRoutes from './components/ProtectedRoutes';
import PokemonInput from './components/PokemonInput';

function App() {
  return (
    <HashRouter>
    <div className="container">
  
    </div>
    <Routes>
      <Route path="/" element={<PokemonInput/>}/>

      <Route element={<ProtectedRoutes />}>
      <Route path="/pokedex" element={<Pokedex/>}/>
      <Route path="/pokemondetail/:id" element={<PokemonDetail/>}/>
      </Route>
    </Routes>
    </HashRouter>
  );
}

export default App;
