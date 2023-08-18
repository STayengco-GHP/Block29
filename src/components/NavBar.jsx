import { Link } from "react-router-dom";

export default function NavBar () {

    return(
        <nav className="navBar" >
            <h2 className="navTitle" >The Puppies of Puppy Bowl</h2>
            <h2><Link to="/">All</Link></h2>
            <h2><Link to="/NewPlayerForm">Create</Link></h2>
        </nav>
    )
}