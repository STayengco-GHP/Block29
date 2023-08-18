import fetchAllPlayers from "../API/ajaxHelpers";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import PlayerCard from "./PlayerCard";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [selectedPuppyId, setSelectedPuppyId] = useState(null);
//   const navigate = useNavigate();

  useEffect(() => {
    async function fetchAll() {
      try {
        const response = await fetchAllPlayers();
        console.log("in useEffect", response);
        setPlayers(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAll();
  }, []);

  return (
    <div>
      {players.map((puppy) => {
        return (
          //   <div key={puppy.id}>
          //     <h1>{puppy.name}</h1>
          //     <p>{puppy.id}</p>
          //     <img src={puppy.imageUrl} alt="" style={{ width: 100 }} />
          //     <br/>
          //     <button onClick={() => navigate(`/SinglePlayer/${puppy.id}`)}>
          //       Button
          //     </button>
          //   </div>
          <PlayerCard
            key={puppy.id}
            puppy={puppy}
            // selectedPuppyId={selectedPuppyId}
            // setSelectedPuppyId={setSelectedPuppyId}
          />
        );
      })}
    </div>
  );
}
