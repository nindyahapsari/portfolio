/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Segment, Button, Form, Checkbox, Header } from 'semantic-ui-react'

const TodoList = props => {

const { 
    list,
    setTodoList,
    onDelete, 
  } = props

  const onChangeCheckbox = (currentTodoId) => {
    setTodoList(prevTodos => prevTodos
      .map(todo => todo.id === currentTodoId ? {...todo, done: !todo.done} : todo)
    )
  }

  return (
    <>
      <Segment>
        <Segment.Group horizontal>
          <Segment>
            <Header as='h3' 
              className={list.done ? 'list-done' : 'list-not-done'}
            >
              { list.todo }
            </Header>
          </Segment>
          <Segment>
            <Form.Field>
              <label>Done: </label>
              <Checkbox 
                onChange={() => onChangeCheckbox(list.id)} 
              />
            </Form.Field>
          </Segment>
          <Segment>
            <Button basic color='red' content='Delete' onClick={onDelete} />
          </Segment>
        </Segment.Group>
      </Segment>
    </>
  )
}

export default TodoList
