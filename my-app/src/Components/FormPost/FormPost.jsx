import React from "react";
import Form, {
  Input,
  TextArea,
  SubmitButton,
  FormActions,
} from "react-form-component";
import { useMutation } from "react-query";
import CreateRecipe from "./createRecipe.gql";
import { GraphQLClient, gql, request } from "graphql-request";

import { CancelButton } from "./styled-components";

const MUTATION = gql`
  mutation CreateRecipe(
    $title: String!
    $ingredients: [String!]
    $notes: String
  ) {
    createRecipe(
      data: { title: $title, ingredients: $ingredients, notes: $notes }
    ) {
      id
      title
    }
  }
`;

const API_URL =
  "https://api-us-west-2.hygraph.com/v2/clbvxfsuy42y401usdso05d8l/master";

function FormPost(props) {
  const { mutate } = useMutation(CreateRecipe, () => {
    return request(API_URL, MUTATION);
  });

  const handleSubmit = (fields) => {
    request(API_URL, MUTATION, {
      title: fields.title,
      ingredients: [fields.ingredients],
      notes: fields.notes,
    });
    props.closeForm();
  };

  return (
    <Form
      fields={["title", "ingredients", "notes"]}
      mandatory={["title", "ingredients"]}
    >
      <Input name='title' label='Title' />
      <Input
        name='ingredients'
        label='Ingredients'
        placeholder='Separate ingredients with a comma'
      />
      <TextArea name='notes' label='Notes' rows='5' />
      <FormActions align='left'>
        <SubmitButton onClick={(fields) => handleSubmit(fields)}>
          Save
        </SubmitButton>
        <CancelButton onClick={props.closeForm}>Cancel</CancelButton>
      </FormActions>
    </Form>
  );
}

export default FormPost;
