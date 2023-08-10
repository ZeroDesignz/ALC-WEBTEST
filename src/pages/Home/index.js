import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Home as HomeController } from '../../components/Home'
import { Container } from './styled'

export const Home = (props) => {
  return (
    <Container>
      <HelmetTags page='home' />
      <HomeController {...props} />
    </Container>
  )
}
