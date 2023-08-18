import { useNavigate } from "react-router-dom";

export default function PlayerCard({ puppy }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="playerCard" >
        <h1>{puppy.name}</h1>
        <p>Breed: {puppy.breed}</p>
        <p>Puppy ID: {puppy.id}</p>
        <img src={puppy.imageUrl} alt="" style={{width:100}}  /> 
        <br />
        <button className="cardButtons" onClick={() => navigate(`/SinglePlayer/${puppy.id}`)}>See Details</button>
      </div>
    </div>
  );
}

