import { gql } from "@apollo/client";

const GET_RECIPES = gql`
  query recipes {
    recipes {
      id
      title
      notes
      ingredients
    }
  }
`;

export default GET_RECIPES;
