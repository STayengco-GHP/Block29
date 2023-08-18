import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SinglePlayer() {
  const { puppyId } = useParams();
  console.log("SinglePlayer has ", puppyId);
  const [onePup, setPup] = useState([]);

  const cohortName = "2306-GHP-ET-WEB-FT-SF";
  const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

  useEffect(() => {
    const fetchSinglePlayer = async (puppyId) => {
      try {
        console.log(`${API_URL}/players/${puppyId}`)
        const response = await fetch(`${API_URL}/players/${puppyId}`)
        const result = await response.json()
        setPup(result.data.player)
      } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
      }
    };
    fetchSinglePlayer(puppyId)

  }, []);

  return (
    <div>
      <p>Single Player</p>
      <p>{onePup.name}</p>
      <p>{onePup.breed}</p>
      <p>{onePup.status}</p>
      <p>{onePup.team?.name}</p>
      <img src={onePup.imageUrl} alt="" style={{width:100}}  /> 
    </div>
  );
}
