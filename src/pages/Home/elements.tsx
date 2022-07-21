import styled from "styled-components";
import { EmphasisColor } from "../../misc/colors";


export const NewCardButton = styled.button.attrs((props:any) => ({
    
}))`
background: ${EmphasisColor};
border-radius: 3px;
border: none;
color: white;
`

export const BackgroundSearch = styled.div`
    width:100%;
    background-image:url('./assets/fundo-busca.png');
    background-position:center;
    min-height:260px;
    display:flex;
    justify-content:center;
    align-items:center;
    
    @media(max-width: 800px) {
        min-height:150px
    }
`