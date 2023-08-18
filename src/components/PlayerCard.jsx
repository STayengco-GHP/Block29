import { useNavigate } from "react-router-dom";

export default function PlayerCard({ puppy }) {
  const navigate = useNavigate();
  console.log("Player Card has ", {puppy})

  return (
    <div>
      <div>
        <h1>{puppy.name}</h1>
        <p>{puppy.id}</p>
        <img src={puppy.imageUrl} alt="" style={{width:100}}  /> 
        <br />
        <button onClick={() => navigate(`/SinglePlayer/${puppy.id}`)}>Button</button>
      </div>
    </div>
  );
}

