import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Segment,
  Message,
  Icon,
  Button,
} from "semantic-ui-react";

import TodoForm from "../Components/TodoForm";
import TodoList from "../Components/TodoList";

const Todo: React.FC = () => {
  const [todoList, setTodoList] = useState(() => {
    const todoListFromLocalStorage = localStorage.getItem("todolist");
    if (todoListFromLocalStorage) {
      return JSON.parse(todoListFromLocalStorage);
    } else {
      return [];
    }
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todoList));
  }, [todoList]);

  if (isLoading) {
    return <Header as="h3">Loading...</Header>;
  }

  const onDelete = (id: number) => {
    let updatedtodoList: number[] = todoList.filter((list) => list.id !== id);
    setTodoList(updatedtodoList);
  };

  return (
    <>
      <Container className="header-container">
        <Header as="h1">
          <Icon name="write" />
          <Header.Content>Todo List</Header.Content>
        </Header>
      </Container>
      <Container>
        <Segment size="large" padded>
          <TodoForm todoList={todoList} setTodoList={setTodoList} />
          <br />

          {todoList.length === 0 ? (
            <Message size="small" content="Start to add your todo for today" />
          ) : (
            <Segment.Group>
              {todoList.length !== 0 &&
                todoList.map((list) => (
                  <TodoList
                    key={list.id}
                    todoList={todoList}
                    list={list}
                    setTodoList={setTodoList}
                    isDone={list.done}
                    onDelete={() => onDelete(list.id)}
                  />
                ))}
            </Segment.Group>
          )}
        </Segment>
      </Container>
      <Container className="button-footer">
        <Segment basic>
          <Button.Group>
            <Link
              to="https://github.com/nindyahapsari/react-exercises"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <Icon name="github" />
              </Button>
            </Link>
            <Link
              to="https://www.linkedin.com/in/nindya-hapsari-a5000a153/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <Icon name="linkedin" />
              </Button>
            </Link>
          </Button.Group>
        </Segment>
      </Container>
    </>
  );
};

export default Todo;
