import React, { useState } from 'react'
import { BackgroundSearch, ImgGlass, InputButton, InputSearch } from './elements'
import glass from './../../assets/lupa.svg';
export default function SearchBar({SetSearch,Search,OnClickFun }:{SetSearch:any,Search:any,OnClickFun:any}) {
    

    return (
        <BackgroundSearch>
            
            <InputSearch id="search-bar-input" value={Search} 
            onChange={(e)=>SetSearch(String(e.target.value))} />
            <InputButton onClick={(e)=>{
                    OnClickFun();
                }}>
                    <ImgGlass src={glass}/>
            </InputButton>
        </BackgroundSearch>
    )
}

