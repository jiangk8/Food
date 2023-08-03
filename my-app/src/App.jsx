import "./App.css";
import { useState, useEffect } from "react";
import FlipCard from "./Components/FlipCard/flipCard";
import { Row, Container, Header } from "./styled-components";

import { useQuery } from "@apollo/client";

import AddRecipe from "./Components/AddRecipe/AddRecipe";
import SearchBar from "./Components/SearchBar/SearchBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import GET_RECIPES from "./queries/allRecipes.js";

import { FormThemeProvider } from "react-form-component";

export function App() {
  const { data, isLoading, error } = useQuery(GET_RECIPES, {
    fetchPolicy: "network-only",
  });

  const [recipes, setRecipes] = useState();
  console.log(recipes, "cool");

  const addRecipeHandler = (recipe) => {
    //setRecipes(data);
    /*
    setRecipes((prevRecipes) => {
      return [...prevRecipes, recipe];
    });*/
  };

  useEffect(() => {
    setRecipes(data?.recipes);
  }, [data]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Container>
          <Header>
            <SearchBar />
            <FormThemeProvider>
              <AddRecipe onAddRecipe={addRecipeHandler} />
            </FormThemeProvider>
          </Header>
          <Row>
            {data?.recipes?.map((recipe) => (
              <FlipCard key={recipe.id} card={recipe} />
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}

export default App;
