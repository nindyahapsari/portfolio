import { Container, Grid, Header, Card, Segment, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ProjectCard = ({
  header,
  description,
  icon,
  techstack=null,
  linkPage=null,
}) => {

// const { description, icon, techstack, link } = projectAttr
  return (
    <Card>
      <Card.Content header={header}/>
      <Card.Content description={description}/>
      {
        techstack ?
          <Card.Content extra>
            <Icon name={icon}/>
            { techstack }
          </Card.Content>
          :
          <Card.Content extra>
            <Link to={linkPage} target='_blank' rel='noopener noreferrer'>
              <Icon name='github'/>
            </Link>
          </Card.Content>
      }
    </Card>
  )
}

export default ProjectCard
