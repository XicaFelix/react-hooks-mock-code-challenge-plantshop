import React, {useState} from "react";

function Search({plantList, onFilter}) {
  const [searchText, setSearchText]= useState('')

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => {setSearchText(e.target.value); onFilter(searchText)}}
      />
    </div>
  );
}

export default Search;
