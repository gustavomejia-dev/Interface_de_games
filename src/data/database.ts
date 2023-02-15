import Image1 from "../assets/jogo1.jpg"
import Image2 from "../assets/jogo2.jpg"
import Image3 from "../assets/jogo3.jpg"

export interface iGame{
    image:string;
    name: string;
    category: string;
    
}
export interface iMyGame extends iGame{
    install: boolean;
    
}
export const gameData:iGame[] = [
    {
        image: Image1,
        name: 'Jogo 1',
        category: 'RPG',
        
    },
    {
        image: Image2,
        name: 'Jogo 2',
        category: 'FPS',
    },
    {
        image: Image3,
        name: 'Jogo 3',
        category: 'Adventure',
    },
    {
        image: Image2,
        name: 'Jogo 4',
        category: 'MMORPG',
    },
]

export const myGameData:iMyGame[] = [
    {
        image: Image1,
        name: 'Jogo 1',
        category: 'RPG',
        install: false,
    },
    {
        image: Image2,
        name: 'Jogo 2',
        category: 'FPS',
        install: false,
    },
    {
        image: Image3,
        name: 'Jogo 3',
        category: 'Adventure',
        install: false,
    },
    {
        image: Image2,
        name: 'Jogo 4',
        category: 'MMORPG',
        install: true,
    },
]