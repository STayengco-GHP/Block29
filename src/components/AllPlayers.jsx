import fetchAllPlayers from "../API/ajaxHelpers";
import { useState, useEffect } from "react";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchAll() {
        try {
            const response = await fetchAllPlayers()
            console.log("in useEffect", response)
            setPlayers(response)
        } catch (error) {
            console.error(error)
        }
    }
    fetchAll()
  }, []);

  return (
    <div>
    {
      players.map((puppy) => {
        return (
            <p>{puppy.name}</p>
        )
      })
    }   
        
        <p>All Players</p>
    </div>
  );
}
