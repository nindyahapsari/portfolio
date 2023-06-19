import { useState, useEffect } from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'

import TodoForm from "../components/TodoForm"
import TodoList from "../components/TodoList"

const Todo = () => {

  const [ lists, setLists ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(lists))
  }, [lists])

  if (isLoading){
    return (
      <Header as='h3'>Loading...</Header>
    )
  }

  const onDelete = (id) => {
    let updatedLists = lists.filter((list) => list.id !== id )
    setLists(updatedLists)
  }

  return (
    <>
      <Container className='header-container'>
        <Header as='h2'>Todo Page</Header>
      </Container>
      <Container>
        <br />
        <TodoForm 
          lists={lists}
          setLists={setLists}
        />
        <br />

        {

          lists.length === 0 ? <Header as='h2'>No Todos, add todo to see the list</Header> : 
            <Segment.Group>
              {
                lists && 
                  lists.map(list => <TodoList 
                    key={list.id} 
                    lists={lists}
                    list={list} 
                    onDelete={() => onDelete(list.id)} 
                  /> 
                  )
              }
            </Segment.Group>
        }
      </Container>
    </>
  )
}

export default Todo
