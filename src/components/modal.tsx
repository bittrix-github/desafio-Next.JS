"use client"

import { useModal } from "@/hooks/useModal"
import { EntityType } from "@/types/entityTypes"
import { styled } from "styled-components"
import { SecondaryButton } from "./secondaryButton"
import { useId } from "react"
import { useIdd } from "@/hooks/useId"
import { useMethod } from "@/hooks/useMethod"
import { MethodType } from "@/types/methodTypes"

interface AboutProps {

}

const ModalContainer = styled.dialog`
    position: fixed;
    width: 100%;
    padding: 10rem 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    z-index: 5;
    background-color: rgba(220, 220, 220, 0.4);
    min-height: 100vh;
    color: var(--medium-gray);
    backdrop-filter: blur(2px);
    `
    
    const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    width: 30rem;
    height: 20rem;
    background-color: var(--full-white);
    font-size: 1.8rem;
`

const ButtonContainer = styled.div`
    width: 65%;
    margin-top: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export function Modal ( props: AboutProps ) {

    const { modal, setModal } = useModal()
    const { setIdd } = useIdd()
    const { setMethod } = useMethod()

    function cancelButtonHandler() {
        setModal(false)
        setIdd(0)
    }

    function confirmButtonHandler() {
        setMethod( MethodType.DELETE )
        setModal(false)
    }

    if ( modal ) {
        return (
            <ModalContainer>
                <ModalContent>
                    <span>Deseja realmente excluir?</span>
                    <ButtonContainer>
                        <SecondaryButton onClick={ () => { confirmButtonHandler() } } >Confirmar</SecondaryButton>
                        <SecondaryButton onClick={ () => { cancelButtonHandler() } } >Cancelar</SecondaryButton>
                    </ButtonContainer>
                </ModalContent>
            </ModalContainer>
        )
    }
}