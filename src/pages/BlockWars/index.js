import React from 'react'
import { BlockComponent } from '../../components/BlockComponent'
import { HelmetTags } from '../../components/HelmetTags'
import { Container } from './styled'

export const BlockWars = () => {
  return (
    <Container>
      <HelmetTags page="blockwars" />
      <BlockComponent />
    </Container>
  )
}
