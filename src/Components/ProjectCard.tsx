import React from 'react'
import { Card, Icon, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

type projectCardProps = {
  header: string,
  description: string,
  icon: string,
  techstack? : string,
  linkPage? : string,
}


function ProjectCard ({
  header, description, icon, techstack, linkPage,
}: projectCardProps) {
  return (
    <Card>
      <Card.Content header={header} />
      <Card.Content description={description} />
      {techstack ?
        <Card.Content extra>
          <Icon name={icon} />
          {techstack}
        </Card.Content>
        :
        <Card.Content extra>
          <Popup
            content='click here to go to the repository'
            trigger={
              <Link 
                to={linkPage} 
                target='_blank' 
                rel='noopener noreferrer'
              >
                <Icon name='github' />
            </Link>
            } 
          />
        </Card.Content>}
    </Card>
  )
}

export default ProjectCard
