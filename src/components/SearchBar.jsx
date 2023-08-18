export default function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <div className="searchBar">

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
