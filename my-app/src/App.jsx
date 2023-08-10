import "./App.css";
import React, { useState, useEffect } from "react";
import FlipCard from "./Components/FlipCard/flipCard";
import { Row, Container, Navigation } from "./styled-components";

import { useQuery } from "@apollo/client";

import AddRecipe from "./Components/AddRecipe/AddRecipe";
import SearchBar from "./Components/SearchBar/SearchBar";
import Header from "./Components/Header/Header";
import EditRecipe from "./Components/Edit/EditRecipe";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import GET_RECIPES from "./queries/allRecipes.js";

import { FormThemeProvider } from "react-form-component";

export function App() {
  const [displayedData, setDisplayedData] = useState();
  const { data, isLoading, error } = useQuery(GET_RECIPES, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    console.log(data, "data");
    setDisplayedData(data?.recipes);
  }, [data]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Container>
          <Header />
          <Navigation>
            <SearchBar setDisplayedData={setDisplayedData} />
            <FormThemeProvider>
              <AddRecipe />
              <EditRecipe />
            </FormThemeProvider>
          </Navigation>
          <Row>
            {displayedData?.map((recipe) => (
              <FlipCard key={recipe.id} card={recipe} />
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}

export default App;
