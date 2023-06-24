import { Container, Dimmer, Loader } from 'semantic-ui-react'

const LoaderElement = () => (
    <Container>
      <Dimmer active inverted>
        <Loader size='medium'>Fetching data...</Loader>
      </Dimmer>
    </Container>
    )

export default LoaderElement

