import { useState } from "react"
import SearchBar from "./SearchBar"
import AllPlayers from "./AllPlayers"

export default function FilterablePlayers () {
    const [filterText, setFilterText] = useState('')

    return (
        <div>
            <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
            <button onClick={() => setFilterText('')} >Reset Search</button>
            <AllPlayers filterText={filterText} />
        </div>
    )


}