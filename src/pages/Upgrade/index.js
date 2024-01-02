import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { Container } from './styled'
import { NFTCardList } from '../../components/NFTCardList'

export const Upgrade = () => {
  return (
    <Container>
      <HelmetTags page="upgrade" />
      <NFTCardList/>
    </Container>
  )
}
