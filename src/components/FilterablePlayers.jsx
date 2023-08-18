import { useState } from "react"
import SearchBar from "./SearchBar"
import AllPlayers from "./AllPlayers"

export default function FilterablePlayers () {
    const [filterText, setFilterText] = useState('')

    return (
        <div>
            <div className="searchLayout">
            <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
            <button onClick={() => setFilterText('')} >Reset Search</button>
            </div>
            <AllPlayers filterText={filterText} />
        </div>
    )


}