import { useState } from 'react'
import { useQuery } from '@apollo/client';
import { Label, Grid, Header, Dimmer, Loader, Segment } from 'semantic-ui-react'

import ProjectCard from '../Components/ProjectCard'
import { GET_LUNARVIM_REPOS } from '../Query'

const RepoHeader = (data) => {
  return (
      <Segment basic padded>
        <Header as='h1' dividing>
          Repository collection of {data.repository.name}
        </Header>
        <Header.Subheader as='h3'>
          { data.repository.description}
        </Header.Subheader>
        <Label size='big'>
          Primary Language
          <Label.Detail>{data.repository.primaryLanguage.name}</Label.Detail>
        </Label>
      </Segment>

  )
}


const GithubRepos = () => {

  const first = 20
  const { loading, error, data } = useQuery(GET_LUNARVIM_REPOS, { 
    variables: { first }
  }
  )
  console.log(data)

  const LoaderElement = () => {
    return (
    <Segment>
      <Dimmer active inverted>
        <Loader size='medium'>Fetching data...</Loader>
      </Dimmer>
    </Segment>

    )
  }

  if (loading){
    return <Header as='h2'>Loading...</Header>
  }

  return (
    <>
      {
        !loading && RepoHeader(data)
      }
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
