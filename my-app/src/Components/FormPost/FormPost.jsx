import React from "react";
import Form, {
  Input,
  TextArea,
  SubmitButton,
  FormActions,
} from "react-form-component";
import CREATE_RECIPE from "./createRecipe.js";
import { useMutation } from "@apollo/client";

import { CancelButton } from "./styled-components";

function FormPost(props) {
  const [createRecipe] = useMutation(CREATE_RECIPE);

  const handleSubmit = (fields) => {
    createRecipe({
      variables: {
        title: fields.title,
        ingredients: [fields.ingredients],
        notes: fields.notes,
      },
    });

    props.closeForm();
    props.onSaveRecipe({
      title: fields.title,
      ingredients: [fields.ingredients],
      notes: fields.notes,
    });
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
