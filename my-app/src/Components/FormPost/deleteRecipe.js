import { gql } from "@apollo/client";

const DELETE_RECIPE = gql`
  mutation DeleteRecipe($id: ID) {
    deleteRecipe(where: { id: $id }) {
      id
    }
  }
`;

export default DELETE_RECIPE;
