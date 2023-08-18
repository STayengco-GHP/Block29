export default function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <div>
      <h2>Search Bar</h2>
      <form>
        <input
          type="text"
          value={filterText}
          placeholder="Search..."
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
      </form>
    </div>
  );
}

// goes in AllPlayers
