import React from 'react'
import GameCard from './GameCard/GameCard'
import { gameData } from '../../data/database'
import { StyledGameList } from './style';
import GameListHeader from './GameListHeader/GameListHeader';
import { StyledTitle } from '../../styles/typography';

const GameList = () => {
    
    const newGameData = [...gameData];
    newGameData.length = 3;
    return (
      <section>
        <GameListHeader/>
          <StyledGameList>
            
          {newGameData.map(game =>(
            <GameCard game={game}/>
          ))}



      </StyledGameList>
    </section>
  )

}

export default GameList