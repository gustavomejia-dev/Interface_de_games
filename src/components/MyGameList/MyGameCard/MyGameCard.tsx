import React from 'react'
import { iMyGame } from '../../../data/database'
import { StyledButton } from '../../../styles/buttons';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { StyledMyGameCard } from './style';

interface iMyGameCardProps{
    game: iMyGame;
}

const MyGameCard = ({game}: iMyGameCardProps) => {
  return (
    <StyledMyGameCard>
      <div className="left">
            <img src={game.image} alt={game.image}  />
            <StyledTitle tag="h3" fontSize='medium' fontWeigth={700}>{game.name}</StyledTitle>
            <StyledParagraph fontSize='default'>{game.category}</StyledParagraph>
        </div>
        <div className="right">
          <StyledParagraph fontSize='small'>
            <strong>25 horas jogadas</strong>

          </StyledParagraph>
          {game.install ? (<StyledButton buttonStyle="solid" buttonSize="small">Jogar</StyledButton>)
          :
          <StyledButton buttonStyle="outline" buttonSize="small">Instalar</StyledButton>
          
          }
        </div>
       

    </StyledMyGameCard>
  )
}

export default MyGameCard