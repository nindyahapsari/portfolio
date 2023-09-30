import React, { useState, FC, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Container, Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

const Login: FC = () => {

  const [ email, setEmail ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')
  const [ success, setSuccess ] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    try {
      console.log({
        email,
        password,
      })
      setEmail('')
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
          <Header as='h2'>Login to your account</Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input 
                fluid icon='user' 
                iconPosition='left' 
                placeholder='E-mail address' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button onClick={handleSubmit} color='teal' fluid size='large'>
                Login
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
