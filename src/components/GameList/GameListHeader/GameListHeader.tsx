
import { StyledIconLink } from '../../../styles/buttons'
import { StyledTitle } from '../../../styles/typography'
import { StyledGameListHeader } from './style'
import { MdArrowForward } from 'react-icons/md'

const GameListHeader = () => {
  return (
    <StyledGameListHeader>
        <StyledTitle tag='h2' fontSize='s-large' fontWeigth={700}>Os Mais jogados</StyledTitle>
    <StyledIconLink>
        <MdArrowForward size={30}/>
    </StyledIconLink>
    </StyledGameListHeader>
    
  )
}

export default GameListHeader