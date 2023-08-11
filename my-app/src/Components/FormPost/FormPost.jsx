import React from "react";
import Form, {
  Input,
  TextArea,
  SubmitButton,
  FormActions,
} from "react-form-component";
import CREATE_RECIPE from "./createRecipe.js";
import UPDATE_RECIPE from "./updateRecipe.js";
import DELETE_RECIPE from "./deleteRecipe.js";
import GET_RECIPES from "../../queries/allRecipes.js";
import { useMutation } from "@apollo/client";

import { CancelButton, DeleteButton } from "./styled-components";

function FormPost(props) {
  const [createRecipe] = useMutation(CREATE_RECIPE, {
    refetchQueries: [{ query: GET_RECIPES }],
  });

  const [updateRecipe] = useMutation(UPDATE_RECIPE, {
    refetchQueries: [{ query: GET_RECIPES }],
  });

  const [deleteRecipe] = useMutation(DELETE_RECIPE, {
    refetchQueries: [{ query: GET_RECIPES }],
  });

  const handleSubmit = (fields) => {
    if (props.edit) {
      updateRecipe({
        variables: {
          title: fields.title,
          ingredients: fields.ingredients.toLowerCase().split(", "),
          notes: fields.notes,
          id: props.recipeId,
        },
      });
    } else {
      createRecipe({
        variables: {
          title: fields.title,
          ingredients: fields.ingredients.toLowerCase().split(", "),
          notes: fields.notes,
        },
      });
    }

    props.closeForm();
  };

  const handleDelete = () => {
    deleteRecipe({ variables: { id: props.recipeId } });
    props.closeForm();
  };

  return (
    <Form
      fields={["title", "ingredients", "notes"]}
      mandatory={["title", "ingredients"]}
    >
      <Input
        name='title'
        label='Title'
        initialValue={props.edit && props.recipeTitle}
      />
      <Input
        name='ingredients'
        label='Ingredients'
        placeholder='Separate ingredients with a comma'
        initialValue={props.edit && props.recipeIngredients}
      />
      <TextArea
        name='notes'
        label='Notes'
        rows='5'
        initialValue={props.edit && props.recipeNotes}
      />
      <FormActions align='left'>
        <SubmitButton onClick={(fields) => handleSubmit(fields)}>
          Save
        </SubmitButton>
        <CancelButton onClick={props.closeForm}>Cancel</CancelButton>
        {props.edit && (
          <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        )}
      </FormActions>
    </Form>
  );
}

export default FormPost;
