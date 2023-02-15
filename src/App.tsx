import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { StyledTitle, StyledParagraph } from './styles/typography';
import { StyledButton } from './styles/buttons';
import  Header  from './components/Header/Header';
import MainBanner from './components/MainBanner/MainBanner';
import GameList from './components/GameList/GameList';

import MyGameList from './components/MyGameList/MyGameList';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <MainBanner/>
      <GameList/>
      <MyGameList/>
      
      
    </div>
  )
}

export default App
