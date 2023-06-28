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
    color: var(--medium-gray);

    @media (max-width: 800px) {
        min-height: calc(100vh - 14rem);
    }

    & h1 {
        font-size: 2.4rem;
        margin-bottom: 5rem;
    }

    & h2 {
        font-size: 1.8rem;
        margin-bottom: 3rem;
    }

    & span {
        font-style: italic;
        font-size: 2.2rem;
        font-weight: 200;
        padding: 0 0.5rem;
    }

    & h3 {
        font-size: 1.6rem;
        margin-top: 2rem;
    }

    & h4 {
        font-size: 1.6rem;
        margin-top: 2rem;
    }
    
    & li {
        font-size: 1.7rem;
        list-style: none;
        margin-top: 2rem;
    }

    & em {
        font-style: normal;
        border-bottom: 1px dashed #AAA;
    }
`

export function About ( props: AboutProps ) {

    const { about, setAbout } = useAbout()
    const { setEntity } = useEntity()
    
    useEffect( () => {
        setEntity( EntityType.default )
    }, [] )
    

    if ( about ) {
        return (
            <AboutContainer>
                <h1>Seja muito bem-vindo! &nbsp; &nbsp; &nbsp;:)</h1>
                <h2>Este é o <span>ride on</span>, o portal de translados da DecaBit Engenharia.</h2>
                <h3>Aqui você tem acesso aos registros das viagens de translado dos funcionários da empresa.</h3>
                <ul>
                    <h4>Navegue pelo menu e você poderá:</h4>
                    <li>- &nbsp; Acessar a lista de <em>Funcionários</em> cadastrados, <em>Condutores</em> cadastrados, <em>Veículos</em> cadastrados e histório de <em>Viagens</em> realizadas;</li>
                    <li>- &nbsp; Realizar novos cadastros (de Funcionários, Condutores, Veículos e Viagens);</li>
                    <li>- &nbsp; Atualizar dados já cadastrados em nosso banco.</li>
                </ul>


            </AboutContainer>
        )
    }
}