import { Link } from "react-router-dom";

export default function NavBar () {

    return(
        <nav>
            <Link to="/">All</Link>
            <Link to="/NewPlayerForm">Create</Link>
        </nav>
    )
}