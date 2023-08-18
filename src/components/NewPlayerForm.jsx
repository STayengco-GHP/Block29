import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function NewPlayerForm() {

    const cohortName = "2306-GHP-ET-WEB-FT-SF";
    const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`

    const [ formName, setName] = useState('')
    const [ formBreed, setBreed] = useState('')
    const [ formImageUrl, setImageUrl] = useState('')
    const [ formStatus, setStatus] = useState('bench')
    const [ formTeam, setTeam] = useState('Unassigned')

    const navigate=useNavigate()

    const teamOptions = [
        {label:'Ruff', value: "51"},
        {label:'Fluff', value: "52"},
        {label:'Unassigned', value: "Unassigned"}
    ]

    const statusOptions = [
        {label:'Bench', value: "bench"},
        {label:'Field', value: "field"}
    ]

    function resetForm() {
        setName('')
        setBreed('')
        setImageUrl('')
        setStatus('')
        setTeam('')
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
        console.log(postResponse.data)

        } catch (err) {
            console.error("Oops, something went wrong with adding that player!", err);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <p>New Player Form</p>
                <label>Name:{''} <input value={formName} onChange={(e)=>{ setName(e.target.value)}}/></label><br/>
                <label>Breed:{''} <input value={formBreed} onChange={(e)=>{ setBreed(e.target.value)}}/></label><br/>
                <label>ImageUrl:{''} <input value={formImageUrl} onChange={(e)=>{ setImageUrl(e.target.value)}}/></label><br/>
                <hr/>
                <label>Team
                <select value={formTeam} onChange={(e)=>{ setTeam(e.target.value)}}>
                    {teamOptions.map((option)=>(<option value={option.value}>{option.label}</option>))}
                    </select>
                </label>
                <hr/>
                <label>Status
                <select value={formStatus} onChange={(e)=>{ setStatus(e.target.value)}}>
                    {statusOptions.map((option)=>(<option value={option.value}>{option.label}</option>))}
                    </select>
                </label>
                <hr/>
                <button type="reset" onClick={resetForm}>Reset</button>
                <button type="submit">Submit</button>
                <button onClick={handleReturn}>Return to All</button>
            </form>
        </div>
    )
}
