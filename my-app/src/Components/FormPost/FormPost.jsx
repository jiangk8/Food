import React from "react";
import Form, {
  Input,
  TextArea,
  SubmitButton,
  FormActions,
} from "react-form-component";
import CREATE_RECIPE from "./createRecipe.js";
import GET_RECIPES from "../../queries/allRecipes.js";
import { useMutation } from "@apollo/client";

import { CancelButton } from "./styled-components";

function FormPost(props) {
  const [createRecipe] = useMutation(CREATE_RECIPE, {
    refetchQueries: [{ query: GET_RECIPES }],
  });

  const handleSubmit = (fields) => {
    createRecipe({
      variables: {
        title: fields.title,
        ingredients: fields.ingredients.toLowerCase().split(", "),
        notes: fields.notes,
      },
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
