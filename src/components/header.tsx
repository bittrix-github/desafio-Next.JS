"use client"

import { styled } from "styled-components"
import { useAbout } from "@/hooks/useAbout"
import { useRegisterForm } from "@/hooks/useRegisterForm"
import { useEntity } from "@/hooks/useEntity"
import { EntityType } from "@/types/entityTypes"
import { useBurguer } from "@/hooks/useBurguer"

interface HeaderProps {

}

interface BurguerProps {
    open: boolean
}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8rem;
    padding: 0 5vw;
    background-color: var(--light-gray);
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: max-content;
    font-size: 2.4rem;
    font-weight: 600;
    color: var(--medium-gray);
    cursor: pointer;
    text-decoration: none;

    & svg {
        width: 3rem;
        margin-top: -2rem;
        transform: rotate(40deg)
    }
`

const BurguerLayer = styled.div`
    width: 3rem;
    height: 0.3rem;
    border-radius: var(--border-radius);
    background-color: var(--medium-gray);
    transition: all 0.2s ease;
`

const BurguerContainer = styled.div<BurguerProps>`
    width: 3rem;
    height: 2.3rem;
    cursor: pointer;
    display: none;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    ${ props => props.open ? `${ BurguerLayer }:nth-child(2) {
        display: none;
    }` : ``
    }

    ${ props => props.open ? `${ BurguerLayer }:nth-child(1) {
        transform: translate(0, 0.7rem) rotate(45deg);
    }` : ``
    }

    ${ props => props.open ? `${ BurguerLayer }:nth-child(3) {
        transform: translate(0, -1.3rem) rotate(-45deg);
    }` : ``
    }
`

export function Header ( props: HeaderProps ) {
    const { setAbout } = useAbout()
    const { setRegisterForm } = useRegisterForm()
    const { setEntity } = useEntity()
    const { burguer, setBurguer } = useBurguer()

    function clickHandler () {
        setAbout(true)
        setRegisterForm(false)
        setEntity(EntityType.default)
        setBurguer(false)
    }

    function burguerClickHandler(burguer: boolean) {
        setBurguer( !burguer )
    }

    return (
        <TagHeader>
            <Logo onClick={ () => clickHandler() } > ride on <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--medium-gray)"><path d="M16 16C17.6569 16 19 17.3431 19 19C19 20.6569 17.6569 22 16 22C14.3431 22 13 20.6569 13 19C13 17.3431 14.3431 16 16 16ZM6 12C8.20914 12 10 13.7909 10 16C10 18.2091 8.20914 20 6 20C3.79086 20 2 18.2091 2 16C2 13.7909 3.79086 12 6 12ZM14.5 2C17.5376 2 20 4.46243 20 7.5C20 10.5376 17.5376 13 14.5 13C11.4624 13 9 10.5376 9 7.5C9 4.46243 11.4624 2 14.5 2Z"></path></svg></Logo>
            <BurguerContainer onClick={ () => { burguerClickHandler(burguer) } } open={ burguer }>
                <BurguerLayer />
                <BurguerLayer />
                <BurguerLayer />
            </BurguerContainer>
        </TagHeader>
    )
}