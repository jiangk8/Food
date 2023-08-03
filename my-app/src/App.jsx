import "./App.css";
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

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Container>
          <Header>
            <SearchBar />
            <FormThemeProvider>
              <AddRecipe />
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
