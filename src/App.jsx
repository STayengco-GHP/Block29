import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";
import NavBar from "./components/NavBar";
import Search from "./components/Search";

function App() {
  return (
    <>
      <div id="container">
        <NavBar/>
          <Routes>
            <Route path="/" element={<AllPlayers />}/>
            <Route path="/SinglePlayer/:puppyId" element={<SinglePlayer />} />
            <Route path="/NewPlayerForm" element={<NewPlayerForm />} />
            <Route path="/Search" element={<Search />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
