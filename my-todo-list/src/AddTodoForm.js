import React from 'react';
import { Form, Button } from 'react-bootstrap';

function AddTodoForm() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>ToDo Item</Form.Label>
        <Form.Control type="text" placeholder="Add todo item" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" placeholder="mm/dd/yyyy" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Todo
      </Button>
    </Form>
  );
}

export default AddTodoForm;
