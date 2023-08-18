import { Routes, Route } from "react-router-dom";
import "./App.css";
import FilterablePlayers from "./components/FilterablePlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div id="container">
        <div className="nav">
        <NavBar/>
        </div>
          <Routes>
            {/* <Route path="/" element={<AllPlayers />}/> */}
            <Route path="/" element={<FilterablePlayers />}/>
            <Route path="/SinglePlayer/:puppyId" element={<SinglePlayer />} />
            <Route path="/NewPlayerForm" element={<NewPlayerForm />} />
            {/* <Route path="/Search" element={<Search />} /> */}
          </Routes>
      </div>
    </>
  );
}

export default App;
