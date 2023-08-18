import { fetchAllPlayers } from "../API/ajaxHelpers";
import { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchAll() {
      try {
        const response = await fetchAllPlayers();
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
        return <PlayerCard key={puppy.id} puppy={puppy} />;
      })}
    </div>
  );
}
