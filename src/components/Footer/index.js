import { faDiscord, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTheme } from 'styled-components'
import {
  FooterWrapper,
  FooterContent,
  SocialIcons,
  CopyRightText,
  BackOver
} from './styles'

export const Footer = (props) => {
  const theme = useTheme()

  return (
    <FooterWrapper>
      <FooterContent>
        <SocialIcons>
          {/* <img src={theme.icons.instagramBlue} alt='' />
          <img src={theme.icons.twitterBlue} alt='' />
          <img src={theme.icons.facebookBlue} alt='' /> */}
          <a href="https://discord.gg/Qxaywxajh4" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDiscord} size='2x' /></a>
          <a href="https://twitter.com/algoleagues" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size='2x' /></a>
          <a href="https://t.me/+RFZ8H_OR1yVhNWRh" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTelegram} size='2x' /></a>
          {/* <a href="https://www.nftexplorer.app/collection/algo-leagues" target="_blank" rel="noopener noreferrer" style={{display:'flex', alignItems:'center'}}><img src={theme.icons.nftExplorer} alt='nft-explorer' /></a> */}
        </SocialIcons>
        <CopyRightText>
          <h5>COPYRIGHT 2022 ANTITY, LLC</h5>
        </CopyRightText>
      </FooterContent>
      <BackOver bgOver={theme.images.copyrightBg} />
    </FooterWrapper>
  )
}