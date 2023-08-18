import { useNavigate } from "react-router-dom";

export default function PlayerCard({ puppy, setSelectedPuppyId }) {
  const navigate = useNavigate();
  console.log("Player Card has ", {puppy})

  return (
    <div>
      <div>
        <h1>{puppy.name}</h1>
        <p>{puppy.id}</p>
        <img src={puppy.imageUrl} alt="" style={{width:100}}  /> 
        <br />
        {/* <button onClick={() => {
                setSelectedPuppyId(puppy.id)
            }}>I'm a button</button> */}
        <button onClick={() => navigate(`/SinglePlayer/${puppy.id}`)}>Button</button>
      </div>
    </div>
  );
}

