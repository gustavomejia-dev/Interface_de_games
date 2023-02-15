import React from 'react'
import { StyledIconLink } from '../../../styles/buttons'
import { StyledTitle } from '../../../styles/typography'

import { MdArrowForward } from 'react-icons/md'
import { StyledGameListHeader } from '../../GameList/GameListHeader/style'

export const MyGameListHeader = () => {
  return (
    
    <StyledGameListHeader>
        <StyledTitle tag='h2' fontSize='s-large' fontWeigth={700}>Os Mais jogados</StyledTitle>
    <StyledIconLink>
        <MdArrowForward size={30}/>
    </StyledIconLink>
    </StyledGameListHeader>
        
    


    
  )
}

export default MyGameListHeader