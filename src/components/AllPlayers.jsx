import { fetchAllPlayers } from "../API/ajaxHelpers";
import { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";

export default function AllPlayers({ filterText }) {
  const [players, setPlayers] = useState([]);
  const cards = [];

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

  players.forEach((puppy) => {
    if (puppy.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    cards.push(<PlayerCard key={puppy.id} puppy={puppy} />);
  });

  return <div>{cards}</div>;
}
