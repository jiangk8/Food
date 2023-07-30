import React from "react";
import Form, { Input, FormButton, TextArea } from "react-form-component";
import { Row } from "./styled-components";

function AddPost() {
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
      <Row>
        <FormButton onClick={(fields) => console.log(fields)}>Save</FormButton>
        <FormButton>cancel</FormButton>
      </Row>
    </Form>
  );
}

export default AddPost;
