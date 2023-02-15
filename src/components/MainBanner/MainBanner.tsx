import React from 'react'
import { StyledButton } from '../../styles/buttons'
import { StyledParagraph, StyledTag, StyledTitle } from '../../styles/typography'
import Charizard from "../../assets/charizard.png"
import { StyledBanner } from './style'

const MainBanner = () => {
  return (
    <StyledBanner>
        <div className="flexGrid">
            <div className="content">
                <StyledTag backgroundColor="red">RPG</StyledTag>
                <StyledTitle tag="h1" fontWeigth={400} fontSize="large">Lorem Ipsom Pokeworld</StyledTitle>
                <div className="priceBox">
                    <StyledParagraph opacity ={1} fontSize='small'><strong>R$299,00</strong></StyledParagraph>
                <StyledButton buttonStyle="solid" buttonSize="large">Comprar</StyledButton>
                </div>
            </div>
            <div className="imageGrid">
                <img src={Charizard} alt="imagem do charizard" />

            </div>
        </div>
    </StyledBanner>
  )
}

export default MainBanner