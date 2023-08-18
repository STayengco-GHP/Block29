import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSinglePlayer } from "../API/ajaxHelpers";

export default function SinglePlayer() {
  const { puppyId } = useParams();
  const thisPup = puppyId
  const [onePup, setPup] = useState([]);
  const navigate=useNavigate()

  function handleClick(e) {
  e.preventDefault()
  removePlayer(puppyId)
  }

  const removePlayer = async (puppyId) => {

    const cohortName = "2306-GHP-ET-WEB-FT-SF";
    const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`

    try {
      const response = await fetch(`${API_URL}/players/${puppyId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      const removePuppyStatus = result.success;
      const removePuppyData = result.data;
      console.log("in removePlayer");
      console.log(removePuppyStatus);
      console.log(removePuppyData);
      navigate('/')
    } catch (err) {
      console.error(
        `Whoops, trouble removing player #${puppyId} from the roster!`,
        err
      );
    }
  };

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
    <div className="singlePlayer">
      <h1>{onePup.name}</h1>
      <p>Breed: {onePup.breed}</p>
      <p>Player Status: {onePup.status}</p>
      <p>Team: {onePup.team?.name}</p>
      <img src={onePup.imageUrl} alt={onePup.name} /><br/> 
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}
