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
    let ingredientsArray = [];
    let title = fields.title;
    let notes = fields.notes;
    console.log(fields, "fields");
    if (props.edit && Array.isArray(fields.ingredients)) {
      ingredientsArray = props.recipeIngredients;
    } else {
      ingredientsArray = fields.ingredients.toLowerCase().split(",");
      ingredientsArray = ingredientsArray.map((string) => string.trim());
    }

    if (props.edit) {
      console.log(notes, "edit ingredients");
      updateRecipe({
        variables: {
          title: title,
          ingredients: ingredientsArray,
          notes: notes,
          id: props.recipeId,
        },
      });
    } else {
      console.log(ingredientsArray, " create ingredients");
      createRecipe({
        variables: {
          title: title,
          ingredients: ingredientsArray,
          notes: notes,
        },
      });
    }
    console.log(props.edit, "edit status");
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
