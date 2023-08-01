import React, { useState } from "react";
import { StyledSearchBar, StyledInput } from "./styled-components";

function SearchBar() {
  const [updated, setUpdated] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setUpdated(event.target.value);
    }
  };

  return (
    <StyledSearchBar>
      <StyledInput
        type='text'
        id='message'
        name='message'
        placeholder='search...'
        onKeyDown={handleKeyDown}
      />
    </StyledSearchBar>
  );
}

export default SearchBar;
