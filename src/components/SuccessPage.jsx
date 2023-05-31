import { Container, Header } from 'semantic-ui-react'

const SuccessPage = ({ success }) => {
  return (
    <div>
      { success ? 
        <Container style={{ marginTop: '50px' }}>
          <Header as='h2'>Sign up success! This is dashboard Page</Header>
        </Container>
        : 'redirect to sign up page' 
      }

      
</div>
  )
}

export default SuccessPage
