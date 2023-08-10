import React from 'react'
import { useTheme } from 'styled-components'
import {
  Container,
  Content,
  JinSection,
  JoinTexts,
  JoinShape
} from './styles'

export const JoinTeam = () => {
  const theme = useTheme()

  return (
    <Container id="joinTeam">
      <Content>
        <JinSection bgimage={theme.images.joinSection}>
          <JoinShape bgimage={theme.images.joinTextBack} />
        </JinSection>
      </Content>
      <JoinTexts>
        <h3>JOIN THE </h3>
        <h3> COMUNITY </h3>
        <h3>TODAY ON </h3>
        <h3>DISCORD</h3>
      </JoinTexts>
    </Container>
  )
}