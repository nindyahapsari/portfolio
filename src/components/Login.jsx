import { useState } from 'react'
import { Container, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const Login = props => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const { setSuccess } = props
    // console.log(props)

    try {
      console.log({
        email,
        password,
      })
      setEmail('')
      setPassword('')
      setSuccess(true)


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
            New to us? <a href='#'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default Login
