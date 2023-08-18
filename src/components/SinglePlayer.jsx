import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSinglePlayer } from "../API/ajaxHelpers";

export default function SinglePlayer() {
  const { puppyId } = useParams();
  const thisPup = puppyId
  const [onePup, setPup] = useState([]);

  useEffect(() => {
    async function fetchSingle() {
      try {
        const response = await fetchSinglePlayer(thisPup);
        setPup(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSingle();
  }, [thisPup]);

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
