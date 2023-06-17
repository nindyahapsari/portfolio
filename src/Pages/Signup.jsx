import { useState } from 'react'
import { Container, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


function removeWhiteSpaces(string) {
  return string.replace(/\s+/g, '')
}

const Signup = props => {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ isError, setIsError ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ success, setSuccess ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)

    if (!isEmailValid) {
      setIsError(true)
      setErrorMessage('Please enter a valid email address.')
      return
    }

    const trimWhiteSpaceName = removeWhiteSpaces(name)

    try {
      setName(trimWhiteSpaceName)
      console.log({
        name,
        email,
        password,
      })
      setName('')
      setEmail('')
      setPassword('')
      setSuccess(true)

    } catch (err){
      console.log('error', err)
      console.log({ error: true, errorMessage: e.message, })

    }
  }

  
  console.log(props)
  // if (success){
    // const { history } = props
    // history.push('/dashboard')
  // }

  return (
    <Container>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2'>Sign up with us</Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input 
                fluid icon='user' 
                iconPosition='left' 
                placeholder='Name' 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
                Sign up
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <a href='#'>Login</a>
          </Message>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default Signup
