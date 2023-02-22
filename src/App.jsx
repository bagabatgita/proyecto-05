import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ProtectedHome from "./components/ProtectedHome";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import Config from "./pages/Config";
import { useSelector } from "react-redux";

function App() {
  const themes = useSelector((store) => store.themes);
  return (
    <div  className={`${themes}`}>
      
      <Routes>

        <Route element={<ProtectedHome/> }>
          <Route path="/" element={<Home />} />
        </Route>
              

        <Route element={<ProtectedRoutes/>}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<Pokemon />} />
          <Route path="/config" element={<Config />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
