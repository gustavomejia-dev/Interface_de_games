import React from 'react'

import { StyledParagraph, StyledTitle } from '../../../styles/typography'
import { iGame } from "../../../data/database"
import { StyledGameCard } from './style';
interface iGameCardProps{
    game:iGame;
    
}
const GameCard = ({game}: iGameCardProps) => {
  return (
    <StyledGameCard>

        <img src={game.image} alt={game.name} />
        <StyledTitle tag= "h3" fontSize="medium" fontWeigth={700}>{game.name}</StyledTitle>
        <StyledParagraph fontSize='big'>{game.category}</StyledParagraph>


    </StyledGameCard>
  )
}

export default GameCard