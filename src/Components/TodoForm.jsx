import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Container, Button, Form, Message } from 'semantic-ui-react'

const TodoForm = ({ todoList, setTodoList }) => {

  const [ todoInput, setTodoInput ] = useState({
    value: '',
    isTouched: false,
  })

  const getIsFormValid = () => {
    return (
    todoInput.value
    )
  }

  const onHandleSubmit = () => {
    const list = {
      id: uuidv4(),
      todo: todoInput.value,
      done: false,
    }

    if (todoInput.value){
      setTodoList( prevtodoList => [...prevtodoList, list])
      setTodoInput({ value: '', isTouched: false })
    }

  }

  const onHandleChange = (e) => {
    setTodoInput({ ...todoInput, value: e.target.value })
  }

  const WarningMessage = () => {
    return (
    <Message negative>
        <p>This field cannot be empty</p>
    </Message>
    )
  }

  return (
    <Container>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field>
            <input 
              onChange={(e) => onHandleChange(e)}
              value={todoInput.value}
              onBlur={() => setTodoInput({ ...todoInput, isTouched: true })}
              placeholder="Add todo"
            />
            { todoInput.isTouched && todoInput.value.length === 0 ? <WarningMessage /> : null}
          </Form.Field>
        </Form.Group>
        <Button 
          primary
          disabled={!getIsFormValid()}
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
