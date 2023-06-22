import { useState, useEffect } from 'react'
import { Container, Header, Segment, Message, Icon } from 'semantic-ui-react'

import TodoForm from "../components/TodoForm"
import TodoList from "../components/TodoList"

const Todo = () => {

  const [ todoList, setTodoList ] = useState(() => {
    const todoListFromLocalStorage = localStorage.getItem('todolist')
    if (todoListFromLocalStorage){
      return JSON.parse(todoListFromLocalStorage)
    } else {
      return []
    } 
  })
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(todoList))
  }, [todoList])

  if (isLoading){
    return (
      <Header as='h3'>Loading...</Header>
    )
  }

  const onDelete = (id) => {
    let updatedtodoList = todoList.filter((list) => list.id !== id )
    setTodoList(updatedtodoList)
  }

  return (
    <>
      <Container className='header-container'>
        <Header as='h1'>
          <Icon name='write'/>
          <Header.Content>Todo List</Header.Content>
        </Header>
      </Container>
      <Container>
        <Segment size='large' padded>
        <TodoForm 
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <br />

        {

          todoList.length === 0 ? <Message size='small' content='Start to add your todo for today' /> :
            <Segment.Group>
              {
                todoList.length !== 0 && 
                  todoList.map(list => <TodoList 
                    key={list.id} 
                    todoList={todoList}
                    list={list}
                    setTodoList={setTodoList}
                    isDone={list.done}
                    onDelete={() => onDelete(list.id)} 
                  /> 
                  )
              }
            </Segment.Group>
        }
        </Segment>
      </Container>
    </>
  )
}

export default Todo
