import React from 'react'
import { BackgroundHeader, LogoHolder } from './elements'
import logo from  "./../../assets/logo-teste.svg"

export default function Header() {
    return (
        <header>
            <BackgroundHeader>
                <LogoHolder>
                    <img src={logo} />
                </LogoHolder>
            </BackgroundHeader>

        </header>
    )
}
