/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Segment, Button, Form, Checkbox, Header } from 'semantic-ui-react'

const TodoList = props => {

const { 
    lists,
    list, 
    onDelete, 
  } = props


  const [ isDone, setIsDone ] = useState(false)

  const onChangeCheckbox = (currentTodoId) => {
    setIsDone(prevDone => !prevDone)
    const currentTodo = lists.find(mainList => mainList.id === currentTodoId )
    currentTodo.done = isDone
  }

  return (
    <>
      <Segment>
        <Segment.Group horizontal>
          <Segment>
            <Header as='h3' className={isDone ? 'list-done' : 'list-not-done'}>
              { list.todo }
            </Header>
          </Segment>
          <Segment>
            <Form.Field>
              <label>Done: </label>
              <Checkbox checked={isDone} onChange={() => onChangeCheckbox(list.id)} />
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
