import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import  useSubmit  from '../Hooks/useSubmit'
import { useFormik } from "formik";
import { Container, Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import * as Yup from 'yup';
import {useAlertContext} from "../Context/alertContext";


const Signup = props => {

  const { isLoading, response, submit } = useSubmit()
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => submit('', values),
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(6, "Must be at least 6 characters").required("Required")
        })
  })

  useEffect(() =>{
    if (response) {
      console.log(response)
      onOpen(response.type, response.message)
      if (response.type === 'success') {
        formik.resetForm()
      }
    }

  },[response])
  
  return (
    <Container>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          {
             response && response.type === 'success' ?  <Message
              success
              header='Your user registration was successful'
              content={response.message}
            /> :
              null
              
          }
          <Header as='h2'>Sign up with us</Header>
          <Form size='large' onSubmit={formik.handleSubmit}>
            <Segment stacked>
              <Form.Input 
                id='name'
                name='name'
                fluid icon='user' 
                iconPosition='left' 
                placeholder='Name' 
                {...formik.getFieldProps('name')}
              />
              { formik.errors.name ? <Message negative>{formik.errors.name}</Message> : null }
              <Form.Input 
                id='email'
                type='email'
                fluid icon='user' 
                iconPosition='left' 
                placeholder='E-mail address' 
                name="email"
                {...formik.getFieldProps('email')}
              />
              { formik.errors.email ? <Message negative>{formik.errors.email}</Message> : null }
              <Form.Input
                id='password'
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name="password"
                onChange={formik.handleChange}
                {...formik.getFieldProps('password')}
              />
              { formik.errors.password ? <Message negative>{formik.errors.password}</Message> : null }

              <Form.Button type='submit' content='Sign up'/>
            </Segment>
          </Form>
          <Message>
            Already have an account? 
            <Link to='/'>Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default Signup
