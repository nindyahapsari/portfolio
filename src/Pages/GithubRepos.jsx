import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom'
import { Container, Button, Label, Grid, Header, Dimmer, Loader, Segment } from 'semantic-ui-react'

import ProjectCard from '../Components/ProjectCard'
import LoaderElement from '../Components/LoaderElement'
import { GET_LUNARVIM_REPOS } from '../Query'

  const REPO_QUANTITY = {
    DEFAULT: 2,
    LESS: 5,
    MID: 20,
    MAX: 30,
  }

const RepoHeader = ({ 
  name, 
  description, 
  primaryLang,
}) => (
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

const GithubRepos = () => {

  const { loading, error, data, refetch } = useQuery(GET_LUNARVIM_REPOS, { variables: { first: REPO_QUANTITY.DEFAULT }})

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
          <Button content={REPO_QUANTITY.LESS} onClick={() => refetch({ first: REPO_QUANTITY.LESS })}/>
          <Button content={REPO_QUANTITY.MID} onClick={() => refetch({ first: REPO_QUANTITY.MID })}/>
          <Button content={REPO_QUANTITY.MAX} onClick={() => refetch({ first: REPO_QUANTITY.MAX })}/>
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
          data.search.nodes.map(repo => (
            <Grid.Column key={repo.id}>
                <ProjectCard 
                  key={repo.id}
                  header={repo.name} 
                  description={repo.description}
                  icon='github'
                  linkPage={repo.url}
                />
            </Grid.Column>
          ))
        }
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  )
}

export default GithubRepos
