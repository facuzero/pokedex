import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PokeCard from "../components/PokeCard";
import MyPokemons from "../components/MyPokemons";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PokeCard />} />
        <Route path='/myPokemons' element={<MyPokemons />} />
      </Routes>
    </Router>
  );
};
export default Rutas;
