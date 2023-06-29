"use client"

import { useAbout } from "@/hooks/useAbout"
import { useEntity } from "@/hooks/useEntity"
import { EntityType } from "@/types/entityTypes"
import { useEffect } from "react"
import { styled } from "styled-components"

interface AboutProps {

}

const AboutContainer = styled.section`
    position: fixed;
    width: 100%;
    padding: 10rem 5vw;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    z-index: 4;
    background-color: var(--full-white);
    min-height: calc(100vh - 22rem);
    color: var(--dark-gray);

    @media (max-width: 800px) {
        min-height: calc(100vh - 14rem);
    }

    & h1 {
        font-size: 2.4rem;
        font-weight: 600;
        color: var(--strong-burple);
        margin-bottom: 3rem;
    }

    & h2 {
        font-size: 1.8rem;
        font-weight: 400;
        margin-bottom: 2rem;
    }

    & span {
        font-size: 2.4rem;
        font-weight: 600;
        color: var(--strong-green);
    }

    & h3 {
        font-size: 1.8rem;
        font-weight: 600;
        margin-top: 2rem;
    }
    
    & li {
        font-size: 1.7rem;
        list-style: none;
        margin-top: 2rem;
    }
`

export function About ( props: AboutProps ) {

    const { about } = useAbout()
    const { setEntity } = useEntity()
    
    useEffect( () => {
        setEntity( EntityType.default )
    }, [ setEntity ] )
    

    if ( about ) {
        return (
            <AboutContainer>
                <h1>Seja muito bem-vindo! &nbsp; &nbsp; &nbsp;:)</h1>
                <h2>Este é o <span>ride on</span>, o portal de translados da DecaBit Engenharia.</h2>
                <h3>Aqui você tem acesso aos registros das viagens de translado dos funcionários da empresa.</h3>
                <ul>
                    <h3>Navegue pelo menu e você poderá:</h3>
                    <li>- &nbsp; Acessar a lista de Funcionários cadastrados, Condutores cadastrados, Veículos cadastrados e histório de Viagens realizadas;</li>
                    <li>- &nbsp; Realizar novos cadastros (de Funcionários, Condutores, Veículos e Viagens);</li>
                    <li>- &nbsp; Atualizar dados já cadastrados em nosso banco.</li>
                </ul>
            </AboutContainer>
        )
    }
}