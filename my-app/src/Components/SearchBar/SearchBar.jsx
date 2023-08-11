import React from "react";
import { useLazyQuery } from "@apollo/client";
import { useQuery } from "@apollo/client";
import SEARCH_RECIPES from "./searchRecipes";
import GET_RECIPES from "../../queries/allRecipes";
import { StyledSearchBar, StyledInput } from "./styled-components";

function SearchBar(props) {
  const [searchRecipes, { data, isLoading }] = useLazyQuery(SEARCH_RECIPES, {
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      props.setDisplayedData(data?.recipes);
    },
  });

  const [allRecipes, { allRecipeData, allRecipeIsLoading }] = useLazyQuery(
    GET_RECIPES,
    {
      fetchPolicy: "network-only",
      onCompleted: (data) => {
        props.setDisplayedData(data?.recipes);
      },
    }
  );

  const handleKeyDown = (event) => {
    console.log(event.target.value, "event");
    if (event.key === "Enter") {
      if (event.target.value) {
        searchRecipes({
          variables: {
            ingredients: event.target.value.toLowerCase().split(", "),
          },
        });
      } else {
        allRecipes();
      }
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
