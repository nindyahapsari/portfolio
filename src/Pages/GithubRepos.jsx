import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom'
import { Button, Label, Grid, Header, Dimmer, Loader, Segment } from 'semantic-ui-react'

import ProjectCard from '../Components/ProjectCard'
import { GET_LUNARVIM_REPOS } from '../Query'

const RepoHeader = ({ 
  name, 
  description, 
  primaryLang,
}) => {
  return (
      <Segment basic padded>
        <Header as='h1' dividing>
          Repository collection of {name}
          <Link to='/dashboard'>
          <Button content='Dashboard' icon='arrow left' floated='right'/>
          </Link>
        </Header>
        <Header.Subheader as='h3'>
          {description}
        </Header.Subheader>
        <Label size='big'>
          Primary Language
          <Label.Detail>{primaryLang}</Label.Detail>
        </Label>
      </Segment>

  )
}


const GithubRepos = () => {

  const { loading, error, data, refetch } = useQuery(GET_LUNARVIM_REPOS, { 
    variables: { first: 6 }
  }
  )

  const LoaderElement = () => {
    return (
    <Segment padded>
      <Dimmer active inverted>
        <Loader size='medium'>Fetching data...</Loader>
      </Dimmer>
    </Segment>

    )
  }

  if (loading){
    return <LoaderElement />
  }

  const { repository } = data

  return (
    <>
      <RepoHeader 
        name={repository.name} 
        description={repository.description} 
        primaryLang={repository.primaryLanguage.name} 
      />
      <Segment>
        <Header as='h3'>Show me: </Header>
        <Button.Group>
          <Button content='5' onClick={() => refetch({ first: 5 })}/>
          <Button content='10'onClick={() => refetch({ first: 10 })}/>
          <Button content='20'onClick={() => refetch({ first: 20 })}/>
        </Button.Group>
      </Segment>
      <Segment basic>
        <Grid 
          container
          centered
          stackable 
          padded
          relaxed
        >
          <Grid.Row centered columns={4}>
        {
              loading ? <LoaderElement/> :
          data.search.nodes.map(repo => {
            return (
            <Grid.Column key={repo.id}>
                <ProjectCard 
                  key={repo.id}
                  header={repo.name} 
                  description={repo.description}
                  icon='github'
                  linkPage={repo.url}
                />
            </Grid.Column>
          )
          })
        }
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  )
}

export default GithubRepos
