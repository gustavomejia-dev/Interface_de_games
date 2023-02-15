import styled,{css, isStyledComponent} from "styled-components";
import BaseTitle from "./components/typography";
export const StyledTitle = styled(BaseTitle)`// a base do componente BaseTitle, está aqui
    font-family: 'Poppins', sans-serif; 
    font-weight:${({fontWeigth})=> fontWeigth};
    color: ${({theme}) => theme.colors.white};
    
    
    ${({fontSize}) => {
        switch(fontSize){
            case "large":
                return css`font-size:44px;
                @media (max-width: 800px){
                    font-size: 36px;
                }
                @media (max-width: 420px){
                    font-size: 32px;}`
               
            case "medium":
                return css`font-size:20px;`

            case "small":
                return css`font-size: 16px;`  
            
            case "s-large":
                    
                return css`font-size: 24px;`
                
                

        }
    }}


`
interface iStyledParagraph{//criando tipagem
    opacity?: number;
    fontSize: "big"| "default" | "small";
}

export const StyledParagraph = styled.p<iStyledParagraph>`//tipando
    font-family: 'Poppins', sans-serif; 
    font-weight: 400;
    strong, b{
        font-weight: 700;
    }
    color: ${({theme}) => theme.colors.white};
    opacity: ${({opacity})=>opacity ? opacity : .5};
    ${({fontSize})=>{
        switch(fontSize){
            case "big":
                return css`
                font-size:20px;`
            case 'default':
                return css`font-size:16px;`

             case 'small':
                return css`font-size: 14px;`   

        }
    }
}
  
`
interface iStyledTag{
    backgroundColor: "blue" | "red";
}
export const StyledTag = styled.span<iStyledTag>`
    font-size: 20px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
    border-radius: 6px;
    color: ${({theme})=>theme.colors.white};

    
    ${({backgroundColor, theme})=>{
        switch(backgroundColor){
        case "blue":
            return css`
            background: ${theme.colors.blue};`
        
        case "red":
            return css`
            background: ${theme.colors.red};`
    
    }   
            
    }}

`

