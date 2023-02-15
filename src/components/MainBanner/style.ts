import styled from "styled-components";

export const StyledBanner =  styled.div`
    padding: 1rem 2.5rem;
    border-radius: 32px;
    background:radial-gradient(red, black) ;
    .flexGrid{
        display:flex;
        align-items: center;
        justify-content: space-between;
        gap: 4rem;
    }
    
    .content{
        min-width:270px ;
        h1{ margin-top:1rem;
    
            }

    }
    .imageGrid{
        img{
            max-width: 100%;
        }

    }
    .priceBox{
        margin-top: 3rem;
        display: inline-flex;
        align-items: center;
        border-radius: 12px;
        background-color: ${({theme})=>theme.colors.white20};
        p{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            
            padding: 0 1.5rem;
        }
    }
    @media (max-width:600px){
        .flexGrid{
            flex-direction: column-reverse;
        }
        .imageGrid{
            img{
                width:100%;
                max-width: 335px;
            }
        }
        .priceBox{
            margin-top: 2rem;

        }

    }
    @media (max-width: 550px){
        padding: 1.5rem;

    }
    @media (max-width: 400px){
        .priceBox{
            width: 100%;
            flex-direction: column;
            button{
                width: 100%;
            }
        }
    }


`