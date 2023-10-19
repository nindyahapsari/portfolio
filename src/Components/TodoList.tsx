/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Grid, Segment, Button, Form, Checkbox, Header } from 'semantic-ui-react'

const TodoList: React.FC = props => {

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
        <Grid padded verticalAlign='middle'>
          <Grid.Row column={2}>
            <Grid.Column 
              width={8}
            >
              <div>
                <Header as='h3' 
                  className={list.done ? 'list-done' : 'list-not-done'}
                >
                  { list.todo }
                </Header>
              </div>
            </Grid.Column>
            <Grid.Column 
              width={2}
              floated='right'
            >
              <div>
                <Button.Group>
                  <Button 
                    size='tiny'
                    basic 
                    onClick={() => onChangeCheckbox()} 
                  >
                  <Checkbox 
                    onChange={() => onChangeCheckbox(list.id)} 
                  />
                  </Button>
                  <Button 
                    size='tiny'
                    basic 
                    onClick={onDelete} 
                    icon='times'
                  />
                </Button.Group>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  )
}

export default TodoList
