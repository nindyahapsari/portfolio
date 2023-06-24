import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import { Container, Grid, Header, Card, Segment } from 'semantic-ui-react'

import ProjectCard from '../Components/ProjectCard'


const projectCardAttributes = [
  {
    id: uuidv4(),
    header: 'Todo List',
    description: 'A simple todo list that save input data using local storage',
    icon: 'code',
    techstack: 'React.js, localStorage, semantic ui',
    linkPage: '/todo',
  },
  {
    id: uuidv4(),
    header: 'Github repos',
    description: 'Small collection of github repository',
    icon: 'code',
    techstack: 'place techstack here',
    linkPage: '/githubrepos',

  },
  {
    id: uuidv4(),
    header: 'third idea',
    description: 'This is place holder',
    icon: 'code',
    techstack: 'place techstack here',
    linkPage: '/todo',
  }
]

const Dashboard = () => {
  return (
    <Container>
      <Segment basic>
        <Header as='h1'>Pick what you want to see</Header>
      </Segment>
      <Grid columns='equal' padded relaxed>
        <Grid.Row>
          <Grid.Column padded={true}>
            <Card.Group centered itemsPerRow={3}>
              {
                projectCardAttributes.map(projectAttr => {
                  return (
                  <Link style={{ margin: '10px' }} key={projectAttr.id} to={projectAttr.linkPage}>
                    <ProjectCard 
                        key={projectAttr.id} 
                        header={projectAttr.header}
                        description={projectAttr.description}
                        icon={projectAttr.icon}
                        techstack={projectAttr.techstack}
                        linkPage={projectAttr.linkPage}
                      />
                  </Link>
                  )
                })
              }
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Dashboard
