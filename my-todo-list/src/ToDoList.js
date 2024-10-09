import React, { useState } from 'react';
import { Container, ListGroup, Tab, Row, Col, Form, Button } from 'react-bootstrap';
import todoItems from './todoItems';

function ToDoList() {
  const [todos] = useState(todoItems);

  const getColorVariant = (dueDate) => {
    const currentDate = new Date();
    const dueDateObj = new Date(dueDate);
    const diffTime = Math.abs(dueDateObj - currentDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    if (diffDays > 7) return 'primary';
    if (diffDays <= 7 && diffDays > 4) return 'success';
    if (diffDays <= 4 && diffDays > 2) return 'warning';
    return 'danger';
  };

  return (
    <Container>
      <h1 className="text-center my-4">Assignment 2: Manoj's ToDo List</h1>
      <Row>
        <Col sm={4}>
          <div className="p-3 bg-success rounded">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="add-item">ToDo Item</Form.Label>
                <Form.Control id="add-item" type="text" placeholder="Add todo item" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="due-date">Due Date</Form.Label>
                <Form.Control id ="due-date" type="date" placeholder="mm/dd/yyyy" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Todo
              </Button>
            </Form>
          </div>
        </Col>
        <Col sm={8}>
          <Tab.Container id="todo-tab">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  {todos.map((todo, index) => (
                    <ListGroup.Item
                      variant= {getColorVariant(todo.dueDate)}
                      key={index}
                      action
                      href={`#todo-${index}`}
                      
                    >
                      {todo.title}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  {todos.map((todo, index) => (
                    <Tab.Pane key={index} eventKey={`#todo-${index}`}>
                      <div contentEditable="true">{todo.description}</div>
                      <input
                        type="date"
                        defaultValue={todo.dueDate}
                      />
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}

export default ToDoList;
