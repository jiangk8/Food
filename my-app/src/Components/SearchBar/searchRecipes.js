import { gql } from "@apollo/client";

const SEARCH_RECIPES = gql`
  query recipe($ingredients: [String!]) {
    recipes(
      where: { ingredients_contains_some: $ingredients }
      orderBy: title_ASC
    ) {
      ingredients
      notes
      title
    }
  }
`;

export default SEARCH_RECIPES;
