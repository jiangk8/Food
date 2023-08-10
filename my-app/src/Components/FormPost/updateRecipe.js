import { gql } from "@apollo/client";

const UPDATE_RECIPE = gql`
  mutation UpdateRecipe(
    $title: String!
    $ingredients: [String!]
    $notes: String
    $id: ID
  ) {
    updateRecipe(
      data: { ingredients: $ingredients, notes: $notes, title: $title }
      where: { id: $id }
    ) {
      id
    }
  }
`;

export default UPDATE_RECIPE;
