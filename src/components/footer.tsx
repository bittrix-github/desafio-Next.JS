"use client"

import { styled } from "styled-components"

interface FooterProps {

}

const TagFooter = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
    padding: 0 5vw;
    background-color: var(--light-gray);
`

const Logo = styled.div`
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--dark-gray);
    cursor: pointer;
    
    & a {
        font-size: 1.6rem;
        font-weight: 600;
        color: var(--strong-burple);
        text-decoration: none;
        margin-left: 0.8rem;
    }
`

export function Footer ( props: FooterProps ) {
    return (
        <TagFooter>
            <Logo>encomendado por: <a href="https://secretarianaty.com/" target="_blank">Secretária Naty</a></Logo>
            <Logo>desenvolvido por: <a href="https://bittrix-github.github.io/portfolio/" target="_blank">bittrix</a></Logo>
        </TagFooter>
    )
}