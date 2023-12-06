import React, { useState, FC, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Container, Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

const Login: FC = () => {

  const [ name, setName ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')
  const [ success, setSuccess ] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    try {
      console.log({ name })
      setName('')
      setPassword('')
      setSuccess(true)
      navigate('/dashboard')
    } catch(err){
      console.log('Error submit', err)
    }
  }

  return (
    <Container>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2'>Enter your name here</Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input 
                fluid icon='user' 
                iconPosition='left' 
                placeholder='Name' 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Button
                onClick={handleSubmit}
                color='teal'
                fluid
                size='large'
              >
                Enter
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? 
            <Link to='/signup'>Sign up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default Login
