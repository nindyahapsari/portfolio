import { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Container, Button, Form } from 'semantic-ui-react'

const TodoForm = ({ todoList, setTodoList }) => {

  // const todoInput = useRef(null)
  const [ todoInput, setTodoInput ] = useState('')

  const onHandleSubmit = () => {
    const list = {
      id: uuidv4(),
      todo: todoInput,
      done: false,
    }
    setLists( prevLists => [...prevLists, list])
    setTodoInput('')
  }

  const onHandleChange = (e) => {
    setTodoInput(e.target.value)
  }

  return (
    <Container>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field>
            <label>Todo: </label>
            <input 
              required
              value={ todoInput }
              onChange={(e) => onHandleChange(e)}
              placeholder='add todo'
            />
          </Form.Field>
        </Form.Group>
        <Button 
          disabled={!todoInput}
          type='submit' 
          onClick={onHandleSubmit}
        >
          Add
        </Button>
      </Form>
    </Container>
  )
}

export default TodoForm
