import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function NewPlayerForm() {

    const cohortName = "2306-GHP-ET-WEB-FT-SF";
    const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`

    const [ formName, setName] = useState('')
    const [ formBreed, setBreed] = useState('')
    const [ formImageUrl, setImageUrl] = useState('')
    const [ formStatus, setStatus] = useState('bench')
    const [ formTeam, setTeam] = useState(51)

    const navigate=useNavigate()

    const teamOptions = [
        {label:'Ruff', value: "51"},
        {label:'Fluff', value: "52"},
        // {label:'Unassigned', value: null}
    ]

    const statusOptions = [
        {label:'Bench', value: "bench"},
        {label:'Field', value: "field"}
    ]

    function resetForm() {
        setName('')
        setBreed('')
        setImageUrl('')
        setStatus('bench')
        setTeam(51)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const puppyObj = {
            name: formName,
            breed: formBreed,
            imageUrl: formImageUrl,
            status: formStatus,
            teamId: formTeam,
          }
          console.log(puppyObj)
        postPuppy(puppyObj)
        resetForm()
    }

    function handleReturn(e) {
        e.preventDefault()
        navigate('/')
        }

    const postPuppy = async (puppyObj) => {
        try {
            const response = await fetch(`${API_URL}/players`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(puppyObj),
            })
        
        const postResponse = await response.json()
        console.log(postResponse.success)
        console.log(postResponse.error)
        console.log(postResponse.data)

        } catch (err) {
            console.error("Oops, something went wrong with adding that player!", err);
        }
    }

    return (
        <div className="newPuppyForm" >
            <form onSubmit={handleSubmit}>
            <h2>Add a New Puppy Bowl Player Here</h2>
                <label>Name:{''} <input className="formInput" value={formName} onChange={(e)=>{ setName(e.target.value)}}/></label><br/>
                <label>Breed:{''} <input className="formInput" value={formBreed} onChange={(e)=>{ setBreed(e.target.value)}}/></label><br/>
                <label>Image URL:{''} <input className="formInput" value={formImageUrl} onChange={(e)=>{ setImageUrl(e.target.value)}}/></label><br/>
                <div className="pickLists">
                <label >Team
                <select value={formTeam} onChange={(e)=>{ setTeam(e.target.value)}}>
                    {teamOptions.map((team)=>(<option value={team.value}>{team.label}</option>))}
                    </select>
                </label>
                <label>Status
                <select value={formStatus} onChange={(e)=>{ setStatus(e.target.value)}}>
                    {statusOptions.map((status)=>(<option value={status.value}>{status.label}</option>))}
                    </select>
                </label>
                </div>
                <button type="reset" onClick={resetForm}>Reset</button>
                <button type="submit">Submit</button>
                <button onClick={handleReturn}>Return to All</button>
            </form>
        </div>
    )
}
