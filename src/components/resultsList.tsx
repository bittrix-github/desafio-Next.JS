"use client"

import { styled, keyframes } from "styled-components"
import { useResults } from '@/hooks/useResults'
import { MethodType } from "@/types/methodTypes"
import { ResultItems } from "./resultItem"
import { PrimaryButton } from './primaryButton'
import { useMethod } from "@/hooks/useMethod"
import { useIdd } from "@/hooks/useId"
import { useFormData } from "@/hooks/useFormData"
import { useRegisterForm } from "@/hooks/useRegisterForm"

interface ResultsListProps {

}

const ResultsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 22rem);
    padding-bottom: 2rem;

    @media (max-width: 800px) {
        min-height: calc(100vh - 14rem);
    }
`

const ResultsTable = styled.div`
    overflow-x: auto;
`

const ButtonContainer = styled.div`
    width: 100%;
    padding: 4rem 5vw;


    @media (max-width: 800px) {
        
        & button {
            margin-left: 50%;
            transform: translateX(-50%);
        }

    }
`

const ResultsHeader = styled.div`
    width: 100%;
    min-width: 80rem;
    height: 4.5rem;
    padding: 0 5vw;
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: var(--light-gray);
    border-bottom: 1px solid var(--full-white);
`

const ResultColumn = styled.span`
    font-size: 1.6rem;
    color: var(--dark-gray);
    width: 100%;
`

const ResultColumnSmall = styled.span`
    font-size: 1.6rem;
    color: var(--dark-gray);
    min-width: 10rem;
`

const CenteredResult = styled.div`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 38rem);
    margin-top: -4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    color: var(--dark-gray);
`

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const load = keyframes`
  to {
    transform: translateX(100%);
  }
`

const LoaderSvg = styled.div`
    width: 5rem;
    animation: ${rotate} 3s linear infinite;
`

const Loading = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 5rem);
    width: 15rem;
    height: 0.6rem;
    border-radius: 0.3rem;
    background-color: var(--light-gray);
    overflow: hidden;

    &:after {
        content: '';
        position: absolute;
        width: 15rem;
        height: 0.6rem;
        border-radius: 0.3rem;
        left: -100%;
        top: 0;
        background-color: #AAA;
        animation: ${load} 10s linear infinite;
    }
`

export function ResultsList ( props: ResultsListProps ) {

    const { setMethod } = useMethod()
    const { setIdd } = useIdd()
    const { setFormData } = useFormData()
    const { registerForm, setRegisterForm } = useRegisterForm()

    const { data, entity, fetchMethod, status } = useResults()

    let results

    if ( status === 'loading' ) {
        results = <CenteredResult>
                <LoaderSvg>
                    <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" fill="#AAA">
                        <path d="M11.9995 2C12.5518 2 12.9995 2.44772 12.9995 3V6C12.9995 6.55228 12.5518 7 11.9995 7C11.4472 7 10.9995 6.55228 10.9995 6V3C10.9995 2.44772 11.4472 2 11.9995 2ZM11.9995 17C12.5518 17 12.9995 17.4477 12.9995 18V21C12.9995 21.5523 12.5518 22 11.9995 22C11.4472 22 10.9995 21.5523 10.9995 21V18C10.9995 17.4477 11.4472 17 11.9995 17ZM20.6597 7C20.9359 7.47829 20.772 8.08988 20.2937 8.36602L17.6956 9.86602C17.2173 10.1422 16.6057 9.97829 16.3296 9.5C16.0535 9.02171 16.2173 8.41012 16.6956 8.13398L19.2937 6.63397C19.772 6.35783 20.3836 6.52171 20.6597 7ZM7.66935 14.5C7.94549 14.9783 7.78161 15.5899 7.30332 15.866L4.70525 17.366C4.22695 17.6422 3.61536 17.4783 3.33922 17C3.06308 16.5217 3.22695 15.9101 3.70525 15.634L6.30332 14.134C6.78161 13.8578 7.3932 14.0217 7.66935 14.5ZM20.6597 17C20.3836 17.4783 19.772 17.6422 19.2937 17.366L16.6956 15.866C16.2173 15.5899 16.0535 14.9783 16.3296 14.5C16.6057 14.0217 17.2173 13.8578 17.6956 14.134L20.2937 15.634C20.772 15.9101 20.9359 16.5217 20.6597 17ZM7.66935 9.5C7.3932 9.97829 6.78161 10.1422 6.30332 9.86602L3.70525 8.36602C3.22695 8.08988 3.06308 7.47829 3.33922 7C3.61536 6.52171 4.22695 6.35783 4.70525 6.63397L7.30332 8.13398C7.78161 8.41012 7.94549 9.02171 7.66935 9.5Z"></path>
                    </svg>
                </LoaderSvg>
        </CenteredResult>
    } else if ( status === 'error' ) {
        results = <CenteredResult> Aconteceu algo inesperado... &nbsp; &nbsp; =/ <Loading/> </CenteredResult>
        setInterval(() => { 
            setIdd( 0 )
            setMethod( MethodType.GET )
         }, 10000)
    }

    if ( fetchMethod === 'get' ) {
        if (data.length === 0 ) {
            results = <CenteredResult> Não há registros. </CenteredResult>
        } else {
            results = data.map( (item: any) => 
                <ResultItems
                    key={ item.id }
                    entity= { entity }
                    data={ item }
                />
            )
        }
    } else if ( fetchMethod === 'post' || fetchMethod === 'put' || fetchMethod === 'delete' ) {
        setIdd( 0 )
        setMethod( MethodType.GET )
    }

    const registerButtonHandler = () => {
        setRegisterForm(true)
    }

    let resultsHeader
    let registerButton

    switch ( entity ) {
        case 'Cliente':
            resultsHeader =
                <ResultsHeader>
                    <ResultColumn> Nome </ResultColumn>
                    <ResultColumnSmall> Id </ResultColumnSmall>
                    <ResultColumn> Documento </ResultColumn>
                    <ResultColumn> Cidade </ResultColumn>
                    <ResultColumn> Estado </ResultColumn>
                    <ResultColumnSmall> Editar </ResultColumnSmall>
                    <ResultColumnSmall> Excluir </ResultColumnSmall>
                </ResultsHeader>
            
            registerButton = 
                <PrimaryButton
                    onClick={ () => { registerButtonHandler() } }
                >
                    Cadastrar funcionário
                </PrimaryButton>
            break
        case 'Condutor':
            resultsHeader =
            <ResultsHeader>
                <ResultColumn> Nome </ResultColumn>
                <ResultColumnSmall> Id </ResultColumnSmall>
                <ResultColumn> Habilitação </ResultColumn>
                <ResultColumn> Vencimento da Habilitação </ResultColumn>
                <ResultColumnSmall> Editar </ResultColumnSmall>
                <ResultColumnSmall> Excluir </ResultColumnSmall>
            </ResultsHeader>

            registerButton = 
            <PrimaryButton
                onClick={ () => { registerButtonHandler() } }
            >
                Cadastrar condutor
            </PrimaryButton>

            break
        case 'Veiculo':
            resultsHeader =
            <ResultsHeader>
                <ResultColumn> Modelo </ResultColumn>
                <ResultColumnSmall> Id </ResultColumnSmall>
                <ResultColumn> Placa </ResultColumn>
                <ResultColumn> Ano de Fabricação </ResultColumn>
                <ResultColumnSmall> Editar </ResultColumnSmall>
                <ResultColumnSmall> Excluir </ResultColumnSmall>
            </ResultsHeader>
            
            registerButton = 
            <PrimaryButton
                onClick={ () => { registerButtonHandler() } }
            >
                Cadastrar veículo
            </PrimaryButton>
            
            break
        default:
            resultsHeader =
            <ResultsHeader>
                <ResultColumn> Início da viagem </ResultColumn>
                <ResultColumn> km inicial </ResultColumn>
                <ResultColumn> km final </ResultColumn>
                <ResultColumn> Motivo </ResultColumn>
                <ResultColumn> Observação </ResultColumn>
                <ResultColumnSmall> Editar </ResultColumnSmall>
                <ResultColumnSmall> Excluir </ResultColumnSmall>
            </ResultsHeader>
            
            registerButton = 
            <PrimaryButton
                onClick={ () => { registerButtonHandler() } }
            >
                Cadastrar viagem
            </PrimaryButton>
            
            break
    }

    if ( !registerForm ) {
        return (
            <ResultsContainer>
                <ButtonContainer>
                    { registerButton }
                </ButtonContainer>
                <ResultsTable>
                    { data.length && resultsHeader }
                    { results }
                </ResultsTable>
            </ResultsContainer>
        )
    }

}