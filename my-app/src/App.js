import "./App.css";
import FlipCard from "./Components/FlipCard/flipCard";
import { Row, Container, Header } from "./styled-components";
import { GraphQLClient, gql, request } from "graphql-request";
import { useQuery } from "react-query";

import AddRecipe from "./Components/AddRecipe/AddRecipe";
import SearchBar from "./Components/SearchBar/SearchBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

import { FormThemeProvider } from "react-form-component";

const API_URL =
  "https://api-us-west-2.hygraph.com/v2/clbvxfsuy42y401usdso05d8l/master";

const QUERY = gql`
  {
    recipes {
      id
      title
      notes
      ingredients
    }
  }
`;

// const cards = [
//   {
//     id: "1",
//     title: "lamb noodles",
//     ingradients: "lamb, noodles, cumin, cilantro",
//     notes: asdf asdf asdf asdfa sdf
//   },
//   {
//     id: "2",
//     title: "rice",
//     back: "Back",
//   },
//   {
//     id: "3",
//     title: "soup",
//     back: "Back",
//   },
//   {
//     id: "4",
//     title: "soup",
//     back: "Back",
//   },
//   {
//     id: "5",
//     title: "soup",
//     back: "Back",
//   },
//   {
//     id: "6",
//     title: "soup",
//     back: "Back",
//   },
//   {
//     id: "7",
//     title: "soup",
//     back: "Back",
//   },
// ];

export function App() {
  const { data, isLoading, error } = useQuery("recipes", () => {
    return request(API_URL, QUERY);
  });

  if (error) return <h1>Something went wrong!</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  console.log(data, "data");
  return (
    <Container>
      <Header>
        <SearchBar />
        <FormThemeProvider>
          <AddRecipe />
        </FormThemeProvider>
      </Header>
      <Row>
        {/* {cards.map((cards) => (
          <FlipCard key={cards.id} card={cards} />
        ))} */}
        {data.recipes.map((recipe) => (
          <FlipCard key={recipe.id} card={recipe} />
        ))}
      </Row>
    </Container>
  );
}

export default App;
