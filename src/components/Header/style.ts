import styled from "styled-components"

export const StyledHeader = styled.header`
    padding: .6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;


    
    .userMenu{
        display:flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;//especifica como uma imagem deve ficar dentro de uma div, sem distorcer
        }
        


        button{
            color: ${({theme})=> theme.colors.white};
            transition: .4s;
            &:hover{
                color: ${({theme})=> theme.colors.blue};

            }

        }
    }
    @media (max-width: 600px){//responsividade 
        flex-direction: column-reverse;
        .userMenu{
            width: 100%;
            justify-content: flex-end;
        }
    }


`

export const StyledHeaderForm = styled.form`
    
    display:inline-flex;
    gap: 1rem;
    align-items: center;
    padding: 0 1rem;
    height: 59px;
    background: ${({theme})=> theme.colors.white20};
    border-radius: 10px;
    input{
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        font-weight: 700;
        background: transparent;
        border: none;
        width: 100% ;
        max-width: 373px;
        color: ${({theme})=> theme.colors.white};
        &::placeholder{
            color: ${({theme})=>theme.colors.white50}

        }
        
    }
    button{
            color: ${({theme})=> theme.colors.white50};
            transition: .4s;

            &:hover{
                color: ${({theme})=> theme.colors.white};

            }

        }

    @media (max-width: 600px){
        input{
            height: 52px;
        }
    }
        
    

`