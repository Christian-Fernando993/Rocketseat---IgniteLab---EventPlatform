import styled from "styled-components";





export const BackgroundSearch = styled.div`
    background-color:#fff;
    width:80%;
    height:50px;
    border-radius:10px;
    display:flex;
    justify-content:space-between;
`

export const InputSearch= styled.input`
    background-color:transparent;
    margin-left:10px;
    flex:1;
    height:100%;
    border:none;
    &:focus {
        outline: none;
        
    }
`

export const InputButton= styled.button`
    background-color:transparent;
    border:none;
    &:hover{
        background-color:#ccc;
        cursor:pointer;
        border-radius:10px;
    }
`

export const ImgGlass=styled.img`
    border:none;
    margin:0px 10px;

`