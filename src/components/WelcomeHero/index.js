import React from 'react'
import { useTheme } from 'styled-components'
import {
  Container,
  StillBkg,
} from './styles'

export const WelcomeHero = () => {
  const theme = useTheme()

  return (
    <Container>
      <StillBkg
        src={theme.images.stillBkg}
      />
    </Container>
  )
}