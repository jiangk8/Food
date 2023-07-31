import React from "react";
import Form, {
  Input,
  TextArea,
  SubmitButton,
  FormActions,
} from "react-form-component";
import { CancelButton } from "./styled-components";

function FormPost() {
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
        <SubmitButton onClick={(fields) => console.log(fields)}>
          Save
        </SubmitButton>
        <CancelButton>Cancel</CancelButton>
      </FormActions>
    </Form>
  );
}

export default FormPost;
