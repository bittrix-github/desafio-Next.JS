"use client"

import { styled } from "styled-components"
import { SecondaryButton } from "./secondaryButton";
import { useIdd } from "@/hooks/useId";
import { formatDate } from "@/utils/formatDate";
import { useUpdateForm } from "@/hooks/useUpdateForm";
import { useModal } from "@/hooks/useModal";

interface ResultItemProps {
    entity: string;
    data: {
        id: number,
        nome: string,
        numeroDocumento: string,
        cidade: string,
        uf: string,

        numeroHabilitacao: string,
        vencimentoHabilitacao: string,

        marcaModelo: string,
        anoFabricacao: string,
        placa: string,

        inicioDeslocamento: string,
        kmInicial: number,
        kmFinal: number,
        motivo: string,
        observacao: string
    }
}

const ResultItem = styled.div`
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
    font-weight: 500;
    color: var(--dark-gray);
    width: 100%;
`

const ResultColumnSmall = styled.span`
    font-size: 1.6rem;
    color: var(--dark-gray);
    min-width: 10rem;
`

export function ResultItems ( props: ResultItemProps ) {

    const { setIdd } = useIdd()
    const { setUpdateForm } = useUpdateForm()
    const { setModal } = useModal()

    const editButtonHandler = ( id: number ) => {
        setIdd( id )
        setUpdateForm( true )
    }

    const deleteButtonHandler = ( id: number ) => {
        setIdd( id )
        setModal( true )
    }

    let formatedDate

    switch ( props.entity ) {
        case 'Cliente':
            return (
                <ResultItem>
                    <ResultColumn> { props.data.nome || '-' } </ResultColumn>
                    <ResultColumnSmall> { props.data.id } </ResultColumnSmall>
                    <ResultColumn> { props.data.numeroDocumento || '-' } </ResultColumn>
                    <ResultColumn> { props.data.cidade || '-' } </ResultColumn>
                    <ResultColumn> { props.data.uf || '-' } </ResultColumn>
                    <ResultColumnSmall>
                        <SecondaryButton onClick={ () => { editButtonHandler( props.data.id ) } }>
                            Editar
                        </SecondaryButton>
                    </ResultColumnSmall>
                    <ResultColumnSmall>
                        <SecondaryButton onClick={ () => { deleteButtonHandler( props.data.id ) } }>
                            Excluir
                        </SecondaryButton>
                    </ResultColumnSmall>
                </ResultItem>
            )
        case 'Condutor':
            formatedDate = formatDate(props.data.vencimentoHabilitacao)
            return (
                <ResultItem>
                    <ResultColumn> { props.data.nome || '-' } </ResultColumn>
                    <ResultColumnSmall> { props.data.id } </ResultColumnSmall>
                    <ResultColumn> { props.data.numeroHabilitacao || '-' } </ResultColumn>
                    <ResultColumn> { formatedDate || '-' } </ResultColumn>
                    <ResultColumnSmall>
                        <SecondaryButton onClick={ () => { editButtonHandler( props.data.id ) } }>
                            Editar
                        </SecondaryButton>
                    </ResultColumnSmall>
                    <ResultColumnSmall>
                        <SecondaryButton onClick={ () => { deleteButtonHandler( props.data.id ) } }>
                            Excluir
                        </SecondaryButton>
                    </ResultColumnSmall>
                </ResultItem>
            )
        case 'Veiculo':
            return (
                <ResultItem>
                    <ResultColumn> { props.data.marcaModelo || '-' } </ResultColumn>
                    <ResultColumnSmall> { props.data.id } </ResultColumnSmall>
                    <ResultColumn> { props.data.placa || '-' } </ResultColumn>
                    <ResultColumn> { props.data.anoFabricacao || '-' } </ResultColumn>
                    <ResultColumnSmall>
                        <SecondaryButton onClick={ () => { editButtonHandler( props.data.id ) } }>
                            Editar
                        </SecondaryButton>
                    </ResultColumnSmall>
                    <ResultColumnSmall>
                        <SecondaryButton onClick={ () => { deleteButtonHandler( props.data.id ) } }>
                            Excluir
                        </SecondaryButton>
                    </ResultColumnSmall>
                </ResultItem>
            )
        default:
            formatedDate = formatDate(props.data.inicioDeslocamento)
            return (
                <ResultItem>
                    <ResultColumn> { formatedDate || '-' } </ResultColumn>
                    <ResultColumn> { props.data.kmInicial || '-' } </ResultColumn>
                    <ResultColumn> { props.data.kmFinal || '-' } </ResultColumn>
                    <ResultColumn> { props.data.motivo || '-' } </ResultColumn>
                    <ResultColumn> { props.data.observacao || '-' } </ResultColumn>
                    <ResultColumnSmall>
                        <SecondaryButton onClick={ () => { editButtonHandler( props.data.id ) } }>
                            Editar
                        </SecondaryButton>
                    </ResultColumnSmall>
                    <ResultColumnSmall>
                        <SecondaryButton onClick={ () => { deleteButtonHandler( props.data.id ) } }>
                            Excluir
                        </SecondaryButton>
                    </ResultColumnSmall>
                </ResultItem>
            )
    }
}