import styled, { css } from "styled-components"
interface iStyledButtonProps{
    buttonSize: "large" | "medium" | "small";
    buttonStyle: "solid" | "outline"
}

export const StyledIconLink = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content:center;
    width: 35px;
    min-width: 35px;
    height: 35px;
    color: ${({theme})=>theme.colors.white};
    opacity: .5;
    transition: .4s;
    &hover{
        opacity: 1;

    }
`
export const StyledButton = styled.button<iStyledButtonProps>`
   display: inline-flex;
   align-items: center;
   font-family :'Poppins', sans-serif ;
   font-size: 17px;
   transition: .4s;
   gap: .6rem;
   border-radius: 12px;
   

    ${({buttonSize})=>{
    switch(buttonSize){
        case 'large': 
        return css`
            height: 69px;
            padding: 0 2rem;`
        
        case 'medium': 
        return css`
            height: 46px;
            padding: 0 2rem;`
        
        case 'small': 
        return css`
            height: 42px;
            padding: 0 1.5rem;`

    }
}}

    ${({ buttonStyle, theme })=>{
        switch(buttonStyle){
            case 'solid':
                return css`
                    background:${theme.colors.blue};
                    color: ${theme.colors.white};
                `
            case 'outline':
                return css`
                    border: 1px solid ${theme.colors.blue};
                    background:transparent;
                    color: ${theme.colors.white};

                    &:hover{
                        background ${theme.colors.blue};

                    }
                `    
        }
    }}

   &:hover{
    filter: brightness(1.1);
    box-shadow: 0 4px 25px rgba(255,249,249,0.25);
   }

`