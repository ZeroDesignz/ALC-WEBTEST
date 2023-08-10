import React from 'react'
import theme from '../../theme.json';
import {
  TeamsLists,
  Content,
  MemberCard,
  ProfileImg,
  UserName,
  UserJobTitle,
  UserYear,
  Title
} from './styles'

export const Team = (props) => {
  const teamList = [
    { id: 1, profileImg: 'ALC-WEBTEST/images/Team/Jessie Paulino.webp', name: 'Jessie', jobTitle: 'Art Director', locationURl: '#' },
    { id: 2, profileImg: 'ALC-WEBTEST/images/Team/EddiePabon.webp', name: 'Eddie', jobTitle: 'Creator', locationURl: '#' },
    { id: 3, profileImg: 'ALC-WEBTEST/images/Team/RichardGranata.png', name: 'Richard', jobTitle: 'Developer', locationURl: '#' },
    { id: 4, profileImg: 'ALC-WEBTEST/images/Team/Jalissa Fulton.webp', name: 'Jalissa', jobTitle: 'Storyline Developer', year:'2021-2022', locationURl: '#' },
    { id: 4, profileImg: 'ALC-WEBTEST/images/Team/Delroy Edwards.webp', name: 'Delroy', jobTitle: 'Storyline Art Design', year:'2021-2022', locationURl: '#' },
  ]
  return (
    <TeamsLists bgimage={theme.images.teamListBack} id='about'>
      <Title>
        <h1>THE TEAM</h1>
      </Title>
      <Content>
        {teamList && teamList.length > 0 && teamList.map((member, i) => (
          <MemberCard key={i}>
            <ProfileImg>
              <img src={member?.profileImg} alt='' />
            </ProfileImg>
            <UserName>{member?.name}</UserName>
            <UserJobTitle>{member?.jobTitle}</UserJobTitle>
            <UserYear>{member?.year}</UserYear>
          </MemberCard>
        ))}
      </Content>
    </TeamsLists>
  )
}