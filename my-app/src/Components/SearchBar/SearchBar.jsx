import React from "react";
import { useLazyQuery } from "@apollo/client";
import SEARCH_RECIPES from "./searchRecipes";
import { StyledSearchBar, StyledInput } from "./styled-components";

function SearchBar(props) {
  const [searchRecipes, { data, isLoading }] = useLazyQuery(SEARCH_RECIPES, {
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      props.setDisplayedData(data?.recipes);
    },
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchRecipes({
        variables: {
          ingredients: event.target.value.toLowerCase().split(", "),
        },
      });
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
