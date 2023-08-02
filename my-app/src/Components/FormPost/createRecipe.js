import { gql } from "@apollo/client";

const CREATE_RECIPE = gql`
  mutation CreateRecipe(
    $title: String!
    $ingredients: [String!]
    $notes: String
  ) {
    createRecipe(
      data: { title: $title, ingredients: $ingredients, notes: $notes }
    ) {
      id
    }
  }
`;

export default CREATE_RECIPE;
